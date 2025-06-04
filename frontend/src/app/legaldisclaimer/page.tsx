"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const LegalDisclaimerPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Legal Disclaimer</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. No Legal Advice</h2>
              <p className="text-gray-600 leading-relaxed">
                The information provided on CivicLens is for general informational purposes only and should not be construed as legal advice. We recommend consulting with qualified legal professionals for specific legal matters.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Accuracy of Information</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Any reliance you place on such information is strictly at your own risk. We shall not be liable for any loss or damage arising from the use of our platform or reliance on any information provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. External Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform may contain links to external websites. We have no control over the content and nature of these sites and are not responsible for their content or privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. AI Analysis Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The AI-powered analysis provided through our platform is based on available data and algorithms. While we strive for accuracy, the analysis should not be considered definitive or comprehensive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For any questions regarding this disclaimer, please contact us at legal@civiclens.com.
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

export default LegalDisclaimerPage; 