'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { MessageSquare, BarChart2, Globe } from 'lucide-react';


interface DocumentAnalysisProps {
  documentId: string;
  title: string;
  summary: string;
  sentiment: {
    positive: number;
    negative: number;
    neutral: number;
  };
  translations: {
    [key: string]: string;
  };
}

export default function DocumentAnalysis({
  documentId,
  title,
  summary,
  sentiment,
  translations,
}: DocumentAnalysisProps) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/api/documents/${documentId}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Failed to get answer:', error);
      setAnswer('Failed to get answer. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className="max-w-5xl mx-auto p-6 space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
      {/* Document Info/Summary Section */}
      <section className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">{title} Summary</h2>
        <p className="text-gray-700">{summary}</p>
      </section>

      {/* Q&A Section */}
      <section className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">Ask Questions</h2>
        </div>
        <form onSubmit={handleQuestionSubmit} className="space-y-4 flex-grow flex flex-col">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about the document..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Getting answer...' : 'Ask'}
          </button>
        </form>
        {answer && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg overflow-y-auto max-h-40">
            <p className="text-gray-700">{answer}</p>
          </div>
        )}
      </section>

      {/* Sentiment Analysis Section */}
      <section className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <BarChart2 className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">Sentiment Analysis</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-grow">
          <div className="text-center p-4 bg-green-50 rounded-lg flex flex-col justify-center">
            <p className="text-sm text-gray-600">Positive</p>
            <p className="text-2xl font-semibold text-green-600">
              {(sentiment.positive * 100).toFixed(1)}%
            </p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg flex flex-col justify-center">
            <p className="text-sm text-gray-600">Negative</p>
            <p className="text-2xl font-semibold text-red-600">
              {(sentiment.negative * 100).toFixed(1)}%
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col justify-center">
            <p className="text-sm text-gray-600">Neutral</p>
            <p className="text-2xl font-semibold text-gray-600">
              {(sentiment.neutral * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </section>

      {/* Translations Section */}
      <section className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-semibold">Translations</h2>
        </div>
        <div className="space-y-4">
          {Object.entries(translations).map(([language, text]) => (
            <div key={language} className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium text-gray-600 mb-2">
                {language.toUpperCase()}
              </p>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Analyse New Document Button */}
      <div className="lg:col-span-2 flex justify-center mt-6">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Analyse new document
        </button>
      </div>
    </div>
    </>
  );
}
