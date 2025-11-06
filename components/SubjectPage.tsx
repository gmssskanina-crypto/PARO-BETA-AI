import React, { useState, useMemo } from 'react';
import { subjectData } from '../data/subjects';
import { Chapter } from '../types';

interface SubjectPageProps {
  subjectId: string;
  onBack: () => void;
  onGenerateMcq: (topic: string) => void;
}

const SubjectPage: React.FC<SubjectPageProps> = ({ subjectId, onBack, onGenerateMcq }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const subject = subjectData[subjectId];

  const filteredCategories = useMemo(() => {
    if (!subject) return [];
    if (!searchTerm.trim()) return subject.categories;

    const lowercasedFilter = searchTerm.toLowerCase();
    
    return subject.categories.map(category => {
      const filteredChapters = category.chapters.filter(chapter =>
        chapter.name.toLowerCase().includes(lowercasedFilter)
      );
      return { ...category, chapters: filteredChapters };
    }).filter(category => category.chapters.length > 0);

  }, [subject, searchTerm]);

  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-red-400 mb-4">Subject Not Found</h1>
        <button onClick={onBack} className="bg-brand-primary text-white font-bold py-2 px-6 rounded-full">
          Go Back
        </button>
      </div>
    );
  }

  const handleGoogleSearch = (topic: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(topic + ' class 12')}`, '_blank');
  };

  const handleYoutubeSearch = (topic: string) => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' class 12')}`, '_blank');
  };
  
  const renderAllNotesLinks = () => {
    if (!subject.allNotesHref) return null;

    const links = Array.isArray(subject.allNotesHref) ? subject.allNotesHref : [{ label: 'View All Notes', href: subject.allNotesHref }];

    return (
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-brand-primary text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="bg-gray-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-10">
        <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <button onClick={onBack} className="text-3xl font-bold hover:text-brand-primary transition-colors">&larr;</button>
          <h1 className="text-2xl sm:text-3xl font-bold text-center">{subject.name} with Paro AI</h1>
          <div className="w-8"></div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
        <section className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a chapter..."
            className="w-full bg-gray-700 border border-gray-600 rounded-full py-3 px-5 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 mb-8"
          />
          
          {renderAllNotesLinks()}

          <div className="space-y-10">
            {filteredCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold text-brand-secondary border-b-2 border-gray-700 pb-2 mb-6">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.chapters.map((chapter, chapIndex) => (
                    <div 
                      key={chapIndex} 
                      className="bg-gray-800 p-5 rounded-xl shadow-lg flex flex-col gap-4 border border-gray-700 hover:border-brand-primary transition-colors"
                    >
                      <h3 className="font-bold text-lg text-center text-gray-200">{chapter.name}</h3>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        {chapter.notesHref ? (
                           <a href={chapter.notesHref} target="_blank" rel="noopener noreferrer" className="text-center bg-btn-info text-white font-semibold py-2 px-3 rounded-full text-sm hover:opacity-90">View Notes</a>
                        ) : (
                           <span className="text-center bg-gray-600 text-gray-400 font-semibold py-2 px-3 rounded-full text-sm opacity-50 cursor-not-allowed">No Notes</span>
                        )}
                         {chapter.ncertHref && (
                           <a href={chapter.ncertHref} target="_blank" rel="noopener noreferrer" className="text-center bg-btn-warning text-gray-900 font-semibold py-2 px-3 rounded-full text-sm hover:opacity-90">NCERT Book</a>
                         )}
                        <button onClick={() => handleGoogleSearch(chapter.name)} className="text-center bg-google text-white font-semibold py-2 px-3 rounded-full text-sm hover:opacity-90">Google</button>
                        <button onClick={() => handleYoutubeSearch(chapter.name)} className="text-center bg-youtube text-white font-semibold py-2 px-3 rounded-full text-sm hover:opacity-90">YouTube</button>
                        <button 
                            onClick={() => onGenerateMcq(chapter.name)} 
                            className="col-span-2 text-center bg-btn-success text-white font-bold py-2 px-3 rounded-full text-sm hover:opacity-90"
                        >
                            Generate MCQ
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
             {filteredCategories.length === 0 && (
                <p className="text-center text-gray-400 py-10">No chapters found for "{searchTerm}".</p>
             )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SubjectPage;