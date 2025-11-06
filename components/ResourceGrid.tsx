import React from 'react';

interface ResourceGridProps {
  onNavigate: (subjectId: string) => void;
}

const scienceSubjects = [
  { name: 'Physics', id: 'physics' },
  { name: 'Chemistry', id: 'chemistry' },
  { name: 'Biology', id: 'biology' },
  { name: 'Mathematics', id: 'mathematics' },
];

const artsSubjects = [
  { name: 'History', id: 'history' },
  { name: 'Political Science', id: 'political-science' },
  { name: 'Geography', id: 'geography' },
  { name: 'Sociology', id: 'sociology' },
];

const otherSubjects = [
  { name: 'English', id: 'english' },
  { name: 'Hindi', id: 'hindi' },
  { name: 'Computer Science', id: 'computerscience' },
  { name: 'IT', id: 'it' },
  { name: 'Fine Arts', id: 'fine-arts' },
];

const generalResources = [
    { name: 'Digital Board Notes', href: 'https://www.dropbox.com/scl/fo/rmv72f7gic0btnjru4h57/ABMJb0ZvsKUfiDfSWrmuN4s?rlkey=qgz1hnp5zo6i9s1oi0w1mbpfm&st=xpu1el3i&dl=0' },
    { name: 'Sample Papers', href: 'https://cbseacademic.nic.in/SQP_CLASSXII_2024-25.html' },
    { name: 'Previous Year Papers', href: 'https://www.cbse.gov.in/cbsenew/question-paper.html' },
];

const ResourceButton: React.FC<{ name: string; onClick: () => void }> = ({ name, onClick }) => (
    <button
        onClick={onClick}
        className="block w-full p-4 bg-gray-800 rounded-lg text-center text-gray-300 font-semibold transition-all duration-300 hover:bg-brand-primary hover:text-white hover:scale-105 shadow-lg"
    >
        {name}
    </button>
);

const ResourceLink: React.FC<{ name: string; href: string }> = ({ name, href }) => (
     <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 bg-gray-800 rounded-lg text-center text-gray-300 font-semibold transition-all duration-300 hover:bg-brand-primary hover:text-white hover:scale-105 shadow-lg"
    >
        {name}
    </a>
);


const ResourceGrid: React.FC<ResourceGridProps> = ({ onNavigate }) => {
  return (
    <section className="space-y-8">
      <div>
          <h2 className="text-3xl font-bold text-gray-200 border-b-2 border-gray-700 pb-3 mb-6">
            Study Resources
          </h2>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-brand-secondary">Science</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {scienceSubjects.map((subject) => (
            <ResourceButton key={subject.id} name={subject.name} onClick={() => onNavigate(subject.id)} />
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-brand-secondary">Arts & Humanities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {artsSubjects.map((subject) => (
            <ResourceButton key={subject.id} name={subject.name} onClick={() => onNavigate(subject.id)} />
          ))}
        </div>
      </div>

       <div className="space-y-6">
        <h3 className="text-xl font-semibold text-brand-secondary">Languages & Electives</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {otherSubjects.map((subject) => (
            <ResourceButton key={subject.id} name={subject.name} onClick={() => onNavigate(subject.id)} />
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-brand-secondary">General Resources</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {generalResources.map((resource) => (
            <ResourceLink key={resource.name} name={resource.name} href={resource.href} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceGrid;