import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getTutorResponse } from '../services/geminiService';

const initialMessage: ChatMessage = {
  role: 'model',
  content: "Hello! I'm Paro AI, created by Dharminder Sharma. What topic would you like to understand better?",
};

const quickQuestions = [
    "Explain Ohm's Law",
    "What is photosynthesis?",
    "Summarize the Harappan Civilisation",
    "What are the main functions of the CPU?",
];


const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: messageContent };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await getTutorResponse(messageContent);
      const modelMessage: ChatMessage = { role: 'model', content: response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sorry, something went wrong.';
      setMessages((prev) => [...prev, { role: 'model', content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
    setInput('');
  };

  const handleQuickQuestion = (question: string) => {
    setInput(''); // Clear input in case user was typing
    handleSendMessage(question);
  };
  
  const handleClearChat = () => {
      setMessages([initialMessage]);
  };

  const renderMessageContent = (content: string) => {
    const parts = content.split(/\*\*(.*?)\*\*/g);
    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
            )}
        </>
    );
  };
  
  const showQuickQuestions = messages.length === 1;

  return (
    <section className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-200 border-b-2 border-gray-700 pb-3 mb-6">
        Paro AI Tutor
      </h2>
      <div
        ref={chatContainerRef}
        className="h-96 overflow-y-auto pr-4 space-y-4 mb-4"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-xl shadow-md ${
                msg.role === 'user'
                  ? 'bg-brand-primary text-white rounded-br-none'
                  : 'bg-gray-700 text-gray-200 rounded-bl-none'
              }`}
            >
              <p className="text-sm sm:text-base leading-relaxed">{renderMessageContent(msg.content)}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start animate-fade-in">
                 <div className="px-4 py-3 rounded-xl bg-gray-700 text-gray-200 rounded-bl-none">
                    <div className="flex items-center space-x-2">
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></span>
                    </div>
                </div>
            </div>
        )}
        {showQuickQuestions && (
            <div className="pt-4 border-t border-gray-700 animate-fade-in">
                <p className="text-sm text-gray-400 mb-3 text-center">Or try one of these quick questions:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {quickQuestions.map((q) => (
                        <button 
                            key={q}
                            onClick={() => handleQuickQuestion(q)}
                            className="w-full text-left text-sm p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-grow bg-gray-700 border border-gray-600 rounded-full py-2 px-5 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200"
          disabled={isLoading}
        />
        <div className="flex gap-2 justify-center">
            <button
              type="button"
              onClick={handleClearChat}
              disabled={isLoading || messages.length <= 1}
              className="bg-gray-600 text-gray-300 font-bold py-2 px-5 rounded-full hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Clear chat history"
            >
                Clear
            </button>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-2 px-6 rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
            >
              Send
            </button>
        </div>
      </form>
    </section>
  );
};

export default AITutor;