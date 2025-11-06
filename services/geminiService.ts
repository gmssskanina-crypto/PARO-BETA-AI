import { GoogleGenAI, Type } from "@google/genai";
import { MCQ, Difficulty } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateMCQs = async (
  topic: string,
  numQuestions: number,
  difficulty: Difficulty
): Promise<MCQ[]> => {
  const model = 'gemini-2.5-flash';

  const prompt = `
    Generate ${numQuestions} multiple-choice questions on the topic of "${topic}" with a ${difficulty} difficulty level.
    For each question, provide exactly 4 options.
    For each question, indicate the correct answer.
    For each question, provide a brief explanation for why the answer is correct.
    Return the response as a valid JSON array.
  `;

  const mcqSchema = {
    type: Type.OBJECT,
    properties: {
      question: {
        type: Type.STRING,
        description: "The question text."
      },
      options: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING
        },
        description: "An array of 4 possible answers."
      },
      correctAnswer: {
        type: Type.STRING,
        description: "The correct answer from the options array."
      },
      explanation: {
        type: Type.STRING,
        description: "A brief explanation for the correct answer."
      }
    },
    required: ["question", "options", "correctAnswer", "explanation"]
  };

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: mcqSchema,
        },
      },
    });

    const jsonText = response.text.trim();
    const parsedJson = JSON.parse(jsonText);
    
    // Basic validation to ensure we have an array of MCQs
    if (Array.isArray(parsedJson) && parsedJson.every(item => 'question' in item && 'options' in item && 'correctAnswer' in item)) {
        return parsedJson as MCQ[];
    } else {
        throw new Error("Invalid JSON format received from API.");
    }

  } catch (error) {
    console.error("Error generating MCQs:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate MCQs: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating MCQs.");
  }
};

export const getTutorResponse = async (prompt: string): Promise<string> => {
  const model = 'gemini-2.5-flash';
  
  const fullPrompt = `You are Paro AI, a knowledgeable and friendly tutor for a Class 12 student. The user asked: "${prompt}". Provide a concise, helpful answer to teach the concept clearly. Use an example if it helps. Keep the response under 150 words. Format important terms with markdown for bolding (**term**).`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error getting tutor response:", error);
    if (error instanceof Error) {
        throw new Error(`AI Tutor failed to respond: ${error.message}`);
    }
    throw new Error("An unknown error occurred while contacting the AI Tutor.");
  }
};