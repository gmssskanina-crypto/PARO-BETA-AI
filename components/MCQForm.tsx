import React, { useState, useEffect } from 'react';
import { Difficulty } from '../types';

interface MCQFormProps {
  onGenerate: (topic: string, numQuestions: number, difficulty: Difficulty) => void;
  isLoading: boolean;
  initialTopic?: string;
}

const MCQForm: React.FC<MCQFormProps> = ({ onGenerate, isLoading, initialTopic }) => {
  const [topic, setTopic] = useState<string>('Capacitance');
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.Medium);

  useEffect(() => {
    if (initialTopic) {
      setTopic(initialTopic);
    }
  }, [initialTopic]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onGenerate(topic, numQuestions, difficulty);
    }
  };
  
  const handleGoogleSearch = () => {
    if (topic.trim()) {
      const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(topic)}`;
      window.open(googleUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleYoutubeSearch = () => {
    if (topic.trim()) {
      const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(topic)}`;
      window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-2">
            Topic
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200"
            placeholder="Enter a topic for MCQs, Google, or YouTube"
            required
          />
        </div>

        <div>
          <label htmlFor="numQuestions" className="block text-sm font-medium text-gray-300 mb-2">
            Number of Questions: <span className="font-bold text-brand-primary">{numQuestions}</span>
          </label>
          <input
            type="range"
            id="numQuestions"
            min="1"
            max="20"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Difficulty
          </label>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {Object.values(Difficulty).map((level) => (
              <div key={level}>
                <input
                  type="radio"
                  id={level}
                  name="difficulty"
                  value={level}
                  checked={difficulty === level}
                  onChange={() => setDifficulty(level)}
                  className="sr-only"
                />
                <label
                  htmlFor={level}
                  className={`cursor-pointer px-4 py-2 rounded-md text-sm font-semibold border-2 transition-all duration-200 ${
                    difficulty === level
                      ? 'bg-brand-primary border-brand-primary text-white'
                      : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-brand-secondary'
                  }`}
                >
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 space-y-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-4 rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
          >
            {isLoading ? 'Generating...' : 'Generate MCQs'}
          </button>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
                type="button"
                onClick={handleGoogleSearch}
                disabled={!topic.trim() || isLoading}
                className="w-full flex justify-center items-center bg-google text-white font-bold py-3 px-4 rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
            >
                Search Google
            </button>
            <button
                type="button"
                onClick={handleYoutubeSearch}
                disabled={!topic.trim() || isLoading}
                className="w-full flex justify-center items-center bg-youtube text-white font-bold py-3 px-4 rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
            >
                Search YouTube
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MCQForm;