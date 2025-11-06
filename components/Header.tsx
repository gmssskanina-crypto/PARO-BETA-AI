import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center animate-fade-in">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
        Class 12 Study with Paro AI
      </h1>
      <p className="mt-3 text-lg text-gray-400">
        Generate MCQs, search for resources, and get help from your AI tutor.
      </p>
    </header>
  );
};

export default Header;
