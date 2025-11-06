import React, { useState } from 'react';
import { MCQ } from '../types';

interface MCQItemProps {
  mcq: MCQ;
  index: number;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const MCQItem: React.FC<MCQItemProps> = ({ mcq, index }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const isAnswered = selectedOption !== null;

  const getOptionClass = (option: string) => {
    if (!isAnswered) {
      return 'border-gray-600 bg-gray-700 hover:bg-gray-600 hover:border-brand-secondary';
    }
    if (option === mcq.correctAnswer) {
      return 'border-green-500 bg-green-500/20 text-green-300';
    }
    if (option === selectedOption) {
      return 'border-red-500 bg-red-500/20 text-red-300';
    }
    return 'border-gray-600 bg-gray-700 opacity-60';
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
      <p className="font-semibold text-lg text-gray-200">
        <span className="text-brand-primary font-bold mr-2">{index + 1}.</span>
        {mcq.question}
      </p>
      <div className="mt-4 space-y-3">
        {mcq.options.map((option, i) => (
          <button
            key={i}
            onClick={() => setSelectedOption(option)}
            disabled={isAnswered}
            className={`w-full text-left p-3 rounded-md border-2 transition-all duration-200 flex items-center ${getOptionClass(option)} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {isAnswered && option === mcq.correctAnswer && <CheckIcon />}
            {isAnswered && option === selectedOption && option !== mcq.correctAnswer && <CrossIcon />}
            <span className="flex-1">{option}</span>
          </button>
        ))}
      </div>
      {isAnswered && (
        <div className="mt-4 p-4 bg-gray-900/50 rounded-md border border-gray-700 animate-fade-in">
          <p className="font-bold text-gray-300">Explanation:</p>
          <p className="text-gray-400 mt-1">{mcq.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default MCQItem;
