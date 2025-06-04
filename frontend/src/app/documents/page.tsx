"use client";
import React, { useState } from 'react';
import { Search, Filter, Download, BookOpen, FileText, ChevronDown } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const DocumentLibraryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    "All",
    "Legislation",
    "Policy Briefs",
    "Research Papers",
    "Reports",
    "Guidelines"
  ];

  const documents = [
    {
      title: "AI Policy Framework 2024",
      category: "Policy Briefs",
      date: "March 15, 2024",
      type: "PDF",
      size: "2.4 MB",
      description: "Comprehensive framework for AI governance and regulation."
    },
    {
      title: "Data Privacy Legislation Review",
      category: "Legislation",
      date: "March 10, 2024",
      type: "PDF",
      size: "1.8 MB",
      description: "Analysis of current data privacy laws and proposed changes."
    },
    {
      title: "Civic Technology Impact Study",
      category: "Research Papers",
      date: "March 5, 2024",
      type: "PDF",
      size: "3.2 MB",
      description: "Study on the impact of technology on civic engagement."
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Document Library</h1>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {doc.category}
                    </span>
                    <span className="text-sm text-gray-500">{doc.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{doc.title}</h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="w-4 h-4 mr-2" />
                      {doc.type} • {doc.size}
                    </div>
                    <button className="flex items-center text-primary-600 hover:text-primary-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Access Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Documents</h3>
                <p className="text-gray-600">Access your recently viewed documents</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <FileText className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Popular Documents</h3>
                <p className="text-gray-600">Most downloaded and viewed documents</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Filter className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced Search</h3>
                <p className="text-gray-600">Use advanced filters to find specific documents</p>
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

export default DocumentLibraryPage; 