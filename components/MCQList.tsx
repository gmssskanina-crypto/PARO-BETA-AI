import React from 'react';
import { MCQ } from '../types';
import MCQItem from './MCQItem';

interface MCQListProps {
  mcqs: MCQ[];
  onClear: () => void;
}

const MCQList: React.FC<MCQListProps> = ({ mcqs, onClear }) => {
  return (
    <div className="mt-10 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center border-b-2 border-gray-700 pb-2">
        <h2 className="text-2xl font-bold text-gray-200">
          Your Quiz is Ready!
        </h2>
        <button 
          onClick={onClear} 
          className="text-sm text-gray-400 hover:text-red-400 transition-colors"
          aria-label="Clear this quiz"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
          </svg>
          Clear Quiz
        </button>
      </div>
      {mcqs.map((mcq, index) => (
        <MCQItem key={index} mcq={mcq} index={index} />
      ))}
    </div>
  );
};

export default MCQList;