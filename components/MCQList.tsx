import React from 'react';
import { MCQ } from '../types';
import MCQItem from './MCQItem';

interface MCQListProps {
  mcqs: MCQ[];
}

const MCQList: React.FC<MCQListProps> = ({ mcqs }) => {
  return (
    <div className="mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-gray-200 border-b-2 border-gray-700 pb-2">
        Your Quiz is Ready!
      </h2>
      {mcqs.map((mcq, index) => (
        <MCQItem key={index} mcq={mcq} index={index} />
      ))}
    </div>
  );
};

export default MCQList;
