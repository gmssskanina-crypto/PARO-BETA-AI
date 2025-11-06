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