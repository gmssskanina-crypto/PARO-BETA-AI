import React from 'react';

interface ViewToggleProps {
  activeView: 'mcq' | 'tutor';
  setActiveView: (view: 'mcq' | 'tutor') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-800/50 border border-gray-700 rounded-full p-1 flex space-x-1">
        <button
          onClick={() => setActiveView('mcq')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
            activeView === 'mcq' ? 'bg-brand-primary text-white' : 'text-gray-400 hover:bg-gray-700/50'
          }`}
        >
          MCQ Generator
        </button>
        <button
          onClick={() => setActiveView('tutor')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
            activeView === 'tutor' ? 'bg-brand-primary text-white' : 'text-gray-400 hover:bg-gray-700/50'
          }`}
        >
          AI Tutor
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
