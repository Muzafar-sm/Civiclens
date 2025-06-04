"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Terms of Service</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using CivicLens, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on CivicLens for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on CivicLens</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate and complete information. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The Service and its original content, features, and functionality are owned by CivicLens and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall CivicLens, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on CivicLens are provided on an 'as is' basis. CivicLens makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
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

export default TermsPage; 