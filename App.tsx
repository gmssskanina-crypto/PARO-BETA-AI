import React, { useState, useCallback, useEffect } from 'react';
import { MCQ, Difficulty, ScreenState } from './types';
import { generateMCQs } from './services/geminiService';
import Header from './components/Header';
import MCQForm from './components/MCQForm';
import MCQList from './components/MCQList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import AITutor from './components/AITutor';
import ResourceGrid from './components/ResourceGrid';
import ViewToggle from './components/ViewToggle';
import SubjectPage from './components/SubjectPage';
import { subjectData } from './data/subjects';


const App: React.FC = () => {
  const [mcqs, setMcqs] = useState<MCQ[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'mcq' | 'tutor'>('mcq');
  const [screen, setScreen] = useState<ScreenState>({ view: 'main' });
  const [initialTopic, setInitialTopic] = useState<string>('');

  const handleGenerate = useCallback(async (topic: string, numQuestions: number, difficulty: Difficulty) => {
    setIsLoading(true);
    setError(null);
    setMcqs([]);
    // Clear initial topic after it's used
    if (initialTopic) setInitialTopic('');

    try {
      const generatedMcqs = await generateMCQs(topic, numQuestions, difficulty);
      setMcqs(generatedMcqs);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [initialTopic]);

  const handleClearMcqs = () => {
    setMcqs([]);
  };

  const handleNavigateToSubject = (subjectId: string) => {
    if (subjectData[subjectId]) {
      setScreen({ view: 'subject', subjectId });
    } else {
      // Fallback for external links
      const resource = [...Object.values(subjectData).flatMap(s => s.categories.flatMap(c => c.chapters)), ...Object.values(subjectData).flatMap(s => Array.isArray(s.allNotesHref) ? s.allNotesHref : [])].find(r => 'name' in r && r.name === subjectId);
      if (resource && 'href' in resource && resource.href) {
        window.open(resource.href, '_blank', 'noopener,noreferrer');
      }
    }
  };
  
  const handleBackToMain = () => {
    setScreen({ view: 'main' });
  };
  
  const handleGenerateMcqForTopic = (topic: string) => {
    setInitialTopic(topic);
    setActiveView('mcq');
    setScreen({ view: 'main' });
  };
  
  useEffect(() => {
    // When screen changes back to main, scroll to the top
    if (screen.view === 'main') {
      window.scrollTo(0, 0);
    }
  }, [screen]);

  if (screen.view === 'subject') {
    return (
      <SubjectPage 
        subjectId={screen.subjectId}
        onBack={handleBackToMain}
        onGenerateMcq={handleGenerateMcqForTopic}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-8 space-y-12">
          <ViewToggle activeView={activeView} setActiveView={setActiveView} />
          
          {activeView === 'mcq' ? (
            <section id="mcq-generator" className="animate-fade-in">
              <MCQForm onGenerate={handleGenerate} isLoading={isLoading} initialTopic={initialTopic} />
              {isLoading && <Loader />}
              {error && <ErrorMessage message={error} />}
              {mcqs.length > 0 && !isLoading && <MCQList mcqs={mcqs} onClear={handleClearMcqs} />}
            </section>
          ) : (
            <AITutor />
          )}

          <ResourceGrid onNavigate={handleNavigateToSubject} />
        </main>
      </div>
    </div>
  );
};

export default App;