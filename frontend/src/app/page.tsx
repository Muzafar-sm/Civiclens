"use client";
import React from 'react';
import Link from 'next/link';
import { FileText, Upload, BarChart, MessageSquare, Globe } from 'lucide-react';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black from-primary-800 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              AI-Powered Analysis for Civic Policies
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Upload any legislative document or policy and get instant insights, summaries, and analysis powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/analyze">
                <Button size="lg" className="w-full sm:w-auto">
                  Analyze a Document
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 hover:bg-white/20">
                  Browse Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Policy Analysis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CivicLens combines multiple AI technologies to provide comprehensive analysis of any legislative document or policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-sm p-8 transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-primary-100 rounded-lg text-primary-700 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Level Summaries</h3>
              <p className="text-gray-600">
                Get document summaries at different complexity levels - from expert analysis to simplified explanations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-sm p-8 transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-secondary-100 rounded-lg text-secondary-700 flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Q&A</h3>
              <p className="text-gray-600">
                Ask specific questions about any policy document and get accurate answers powered by AI.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-sm p-8 transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-accent-100 rounded-lg text-accent-700 flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sentiment Analysis</h3>
              <p className="text-gray-600">
                Understand public opinion on policies through data from social media and news sources.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-sm p-8 transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-success-100 rounded-lg text-success-700 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Translation & Accessibility</h3>
              <p className="text-gray-600">
                Translate policies to multiple languages and convert text to speech for improved accessibility.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-sm p-8 transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-warning-100 rounded-lg text-warning-700 flex items-center justify-center mb-6">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Visualization</h3>
              <p className="text-gray-600">
                Upload infographics or scanned documents and get AI-powered insights through visual analysis.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-sm p-8 transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-error-100 rounded-lg text-error-700 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="m22 9-10 13L2 9l10-5 10 5Z"></path>
                  <path d="M12 22V12"></path>
                  <path d="m2 9 10 3 10-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro/Con Analysis</h3>
              <p className="text-gray-600">
                Get balanced perspectives with AI-generated arguments for and against any policy proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black from-secondary-600 to-secondary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to analyze your first document?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start using CivicLens today to get deeper insights into legislative policies and documents.
          </p>
          <Link href="/analyze">
            <Button size="lg" className="bg-teal text-secondary-300 hover:bg-white-100">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}