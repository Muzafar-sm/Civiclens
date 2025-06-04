"use client";
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const AccessibilityPage: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Accessibility Statement</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
              <p className="text-gray-600 leading-relaxed">
                CivicLens is committed to ensuring digital accessibility for people of all abilities. We strive to continually improve the user experience for everyone and apply relevant accessibility standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Screen Reader Compatibility</h3>
                    <p className="text-gray-600">Our website is compatible with screen readers and includes proper ARIA labels and semantic HTML.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Keyboard Navigation</h3>
                    <p className="text-gray-600">All interactive elements can be accessed and operated using a keyboard.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Color Contrast</h3>
                    <p className="text-gray-600">We maintain WCAG 2.1 Level AA standards for color contrast ratios.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Text Resizing</h3>
                    <p className="text-gray-600">Text can be resized up to 200% without loss of content or functionality.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Standards Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We aim to conform to the following accessibility standards:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                <li>Americans with Disabilities Act (ADA) requirements</li>
                <li>Section 508 of the Rehabilitation Act</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Continuous Improvement</h2>
              <p className="text-gray-600 leading-relaxed">
                We regularly review our website to identify and fix accessibility issues. We welcome feedback from users to help us improve our accessibility features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you encounter any accessibility barriers or have suggestions for improvement, please contact our accessibility team at accessibility@civiclens.com or call us at +1 (555) 123-4567.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AccessibilityPage; 