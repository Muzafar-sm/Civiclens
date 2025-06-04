"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At CivicLens, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Account credentials</li>
                    <li>Usage data and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Operating system</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@civiclens.com.
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

export default PrivacyPage; 