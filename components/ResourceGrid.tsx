import React from 'react';

const resources = [
  { name: 'Physics', href: '#' },
  { name: 'Chemistry', href: '#' },
  { name: 'Biology', href: '#' },
  { name: 'Mathematics', href: '#' },
  { name: 'History', href: '#' },
  { name: 'Political Science', href: '#' },
  { name: 'Geography', href: '#' },
  { name: 'Sociology', href: '#' },
  { name: 'English', href: '#' },
  { name: 'Hindi', href: '#' },
  { name: 'Computer Science', href: '#' },
  { name: 'IT', href: '#' },
  { name: 'Fine Arts', href: '#' },
  { name: 'Digital Board Notes', href: 'https://www.dropbox.com/scl/fo/rmv72f7gic0btnjru4h57/ABMJb0ZvsKUfiDfSWrmuN4s?rlkey=qgz1hnp5zo6i9s1oi0w1mbpfm&st=xpu1el3i&dl=0' },
  { name: 'Sample Papers', href: 'https://cbseacademic.nic.in/SQP_CLASSXII_2024-25.html' },
  { name: 'Previous Year Papers', href: 'https://www.cbse.gov.in/cbsenew/question-paper.html' },
];

const ResourceGrid: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-200 border-b-2 border-gray-700 pb-3 mb-6">
        Study Resources
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {resources.map((resource) => (
          <a
            key={resource.name}
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-800 rounded-lg text-center text-gray-300 font-semibold transition-all duration-300 hover:bg-brand-primary hover:text-white hover:scale-105 shadow-lg"
          >
            {resource.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ResourceGrid;