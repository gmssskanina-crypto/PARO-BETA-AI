import React, { useState, useCallback } from 'react';
import { MCQ, Difficulty } from './types';
import { generateMCQs } from './services/geminiService';
import Header from './components/Header';
import MCQForm from './components/MCQForm';
import MCQList from './components/MCQList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import AITutor from './components/AITutor';
import ResourceGrid from './components/ResourceGrid';
import ViewToggle from './components/ViewToggle';

const App: React.FC = () => {
  const [mcqs, setMcqs] = useState<MCQ[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'mcq' | 'tutor'>('mcq');

  const handleGenerate = useCallback(async (topic: string, numQuestions: number, difficulty: Difficulty) => {
    setIsLoading(true);
    setError(null);
    setMcqs([]);

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
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-8 space-y-12">
          <ViewToggle activeView={activeView} setActiveView={setActiveView} />
          
          {activeView === 'mcq' ? (
            <section id="mcq-generator">
              <MCQForm onGenerate={handleGenerate} isLoading={isLoading} />
              {isLoading && <Loader />}
              {error && <ErrorMessage message={error} />}
              {mcqs.length > 0 && !isLoading && <MCQList mcqs={mcqs} />}
            </section>
          ) : (
            <AITutor />
          )}

          <ResourceGrid />
        </main>
      </div>
    </div>
  );
};

export default App;