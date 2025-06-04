"use client";
import React, { useState } from 'react';
import { Book, Play, FileText, ChevronRight, Search } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const UserGuidesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const guides = [
    {
      title: "Getting Started with CivicLens",
      category: "Basics",
      type: "Tutorial",
      duration: "10 min",
      description: "Learn the basics of using CivicLens for policy analysis."
    },
    {
      title: "Advanced Policy Analysis",
      category: "Advanced",
      type: "Guide",
      duration: "20 min",
      description: "Master advanced features for in-depth policy analysis."
    },
    {
      title: "API Integration Guide",
      category: "Development",
      type: "Technical",
      duration: "15 min",
      description: "Learn how to integrate CivicLens API into your applications."
    }
  ];

  const categories = [
    {
      name: "Getting Started",
      guides: [
        "Platform Overview",
        "Account Setup",
        "Basic Navigation"
      ]
    },
    {
      name: "Features",
      guides: [
        "Policy Analysis",
        "Document Management",
        "Search and Filter"
      ]
    },
    {
      name: "Advanced Topics",
      guides: [
        "Custom Analysis",
        "Data Export",
        "API Integration"
      ]
    }
  ];

  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">User Guides</h1>

          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Featured Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredGuides.map((guide, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                        {guide.category}
                      </span>
                      <span className="text-sm text-gray-500">{guide.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <button className="flex items-center text-primary-600 hover:text-primary-700">
                      {guide.type === "Tutorial" ? (
                        <Play className="w-4 h-4 mr-2" />
                      ) : (
                        <FileText className="w-4 h-4 mr-2" />
                      )}
                      {guide.type === "Tutorial" ? "Watch Tutorial" : "Read Guide"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Book className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                </div>
                <ul className="space-y-3">
                  {category.guides.map((guide, guideIndex) => (
                    <li key={guideIndex}>
                      <a href="#" className="flex items-center text-gray-600 hover:text-primary-600">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        {guide}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Popular Topics</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700">
                        How to Analyze Policy Documents
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700">
                        Understanding AI Analysis Results
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700">
                        Exporting and Sharing Reports
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Need Help?</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700">
                        Contact Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700">
                        Community Forum
                      </a>
                    </li>
                  </ul>
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

export default UserGuidesPage; 