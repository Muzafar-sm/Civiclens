"use client";
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const faqCategories = [
    {
      name: "General",
      questions: [
        {
          question: "What is CivicLens?",
          answer: "CivicLens is an AI-powered platform that helps users understand and analyze policy documents. We use advanced natural language processing to break down complex policy language into clear, understandable insights."
        },
        {
          question: "How does CivicLens work?",
          answer: "CivicLens uses artificial intelligence to analyze policy documents, identify key points, and provide clear explanations. Users can upload documents, and our system will process them to extract relevant information and insights."
        },
        {
          question: "Is CivicLens free to use?",
          answer: "CivicLens offers both free and premium plans. The free plan includes basic analysis features, while premium plans offer advanced features, higher processing limits, and priority support."
        }
      ]
    },
    {
      name: "Technical",
      questions: [
        {
          question: "What file formats are supported?",
          answer: "CivicLens supports various document formats including PDF, DOCX, TXT, and RTF. We're constantly working to add support for more formats."
        },
        {
          question: "How accurate is the AI analysis?",
          answer: "Our AI system is trained on a vast dataset of policy documents and is regularly updated to improve accuracy. However, we recommend reviewing the analysis results and consulting with experts for critical decisions."
        },
        {
          question: "Can I integrate CivicLens with my existing systems?",
          answer: "Yes, CivicLens provides a comprehensive API that allows you to integrate our analysis capabilities into your existing systems. Check our API documentation for more details."
        }
      ]
    },
    {
      name: "Account & Billing",
      questions: [
        {
          question: "How do I upgrade my plan?",
          answer: "You can upgrade your plan at any time from your account dashboard. Simply select the plan you want and follow the payment process."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise customers, we also offer custom payment terms."
        },
        {
          question: "Can I cancel my subscription?",
          answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period."
        }
      ]
    }
  ];

  const toggleQuestion = (question: string) => {
    setExpandedQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Frequently Asked Questions</h1>

          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category.name}</h2>
                  <div className="space-y-4">
                    {category.questions.map((item, qIndex) => (
                      <div key={qIndex} className="border-t border-gray-200 pt-4">
                        <button
                          onClick={() => toggleQuestion(item.question)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transform transition-transform ${
                              expandedQuestions.includes(item.question) ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {expandedQuestions.includes(item.question) && (
                          <div className="mt-4 text-gray-600">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Contact Support</h3>
                  <p className="text-gray-600">
                    Get in touch with our support team for personalized assistance.
                  </p>
                  <a href="/contact" className="text-primary-600 hover:text-primary-700">
                    Contact Us →
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Documentation</h3>
                  <p className="text-gray-600">
                    Check our comprehensive documentation for detailed guides.
                  </p>
                  <a href="/guides" className="text-primary-600 hover:text-primary-700">
                    View Documentation →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FAQPage; 