"use client";
import React, { useState } from 'react';
import { Code, Copy, ChevronDown, Search } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const APIDocumentationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEndpoint, setSelectedEndpoint] = useState('');

  const endpoints = [
    {
      name: "Policy Analysis",
      methods: [
        {
          type: "POST",
          path: "/api/v1/analyze",
          description: "Analyze a policy document and return insights",
          example: `curl -X POST https://api.civiclens.com/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"document": "policy_text_here"}'`
        },
        {
          type: "GET",
          path: "/api/v1/analysis/{id}",
          description: "Retrieve analysis results for a specific document",
          example: `curl -X GET https://api.civiclens.com/v1/analysis/123 \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      name: "Document Management",
      methods: [
        {
          type: "POST",
          path: "/api/v1/documents",
          description: "Upload a new document for analysis",
          example: `curl -X POST https://api.civiclens.com/v1/documents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@document.pdf"`
        },
        {
          type: "GET",
          path: "/api/v1/documents",
          description: "List all documents in your account",
          example: `curl -X GET https://api.civiclens.com/v1/documents \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    }
  ];

  const filteredEndpoints = endpoints.filter(endpoint =>
    endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.methods.some(method =>
      method.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">API Documentation</h1>

          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search API endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* API Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-6">
              The CivicLens API allows you to integrate our policy analysis capabilities into your applications. 
              All API requests require authentication using your API key.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Authentication</h3>
              <p className="text-gray-600 mb-4">
                Include your API key in the Authorization header of all requests:
              </p>
              <div className="relative">
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>
                <button
                  onClick={() => copyToClipboard("Authorization: Bearer YOUR_API_KEY")}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Endpoints Section */}
          <div className="space-y-8">
            {filteredEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">{endpoint.name}</h2>
                  <div className="space-y-6">
                    {endpoint.methods.map((method, methodIndex) => (
                      <div key={methodIndex} className="border-t border-gray-200 pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              method.type === "GET" ? "bg-blue-100 text-blue-800" :
                              method.type === "POST" ? "bg-green-100 text-green-800" :
                              "bg-gray-100 text-gray-800"
                            }`}>
                              {method.type}
                            </span>
                            <span className="ml-4 font-mono text-gray-800">{method.path}</span>
                          </div>
                          <button
                            onClick={() => setSelectedEndpoint(selectedEndpoint === method.path ? '' : method.path)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <ChevronDown className={`w-5 h-5 transform ${
                              selectedEndpoint === method.path ? 'rotate-180' : ''
                            }`} />
                          </button>
                        </div>
                        <p className="text-gray-600 mb-4">{method.description}</p>
                        {selectedEndpoint === method.path && (
                          <div className="relative">
                            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                              <code>{method.example}</code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard(method.example)}
                              className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SDK Section */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">SDK & Libraries</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Code className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">Python SDK</h3>
                  <p className="text-gray-600 mb-4">Official Python client for the CivicLens API</p>
                  <a href="#" className="text-primary-600 hover:text-primary-700">View Documentation →</a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Code className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">JavaScript SDK</h3>
                  <p className="text-gray-600 mb-4">Official JavaScript client for the CivicLens API</p>
                  <a href="#" className="text-primary-600 hover:text-primary-700">View Documentation →</a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Code className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">API Reference</h3>
                  <p className="text-gray-600 mb-4">Complete API reference documentation</p>
                  <a href="#" className="text-primary-600 hover:text-primary-700">View Reference →</a>
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

export default APIDocumentationPage; 