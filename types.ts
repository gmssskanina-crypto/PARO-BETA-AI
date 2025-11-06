export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export enum Difficulty {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard'
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

// Types for subject data integration
export interface Chapter {
  name: string;
  notesHref?: string;
  ncertHref?: string;
}

export interface SubjectCategory {
  title: string;
  chapters: Chapter[];
}

export interface SubjectData {
  id: string;
  name: string;
  allNotesHref?: string | { label: string; href: string }[];
  categories: SubjectCategory[];
}

// Type for app navigation state
export type ScreenState = 
  | { view: 'main' }
  | { view: 'subject'; subjectId: string };