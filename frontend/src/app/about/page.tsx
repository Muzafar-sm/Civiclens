"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <><Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">About CivicLens</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                CivicLens is dedicated to making civic policy analysis more accessible and understandable through the power of artificial intelligence. We believe that an informed citizenry is essential for a healthy democracy, and we're committed to providing tools that help citizens better understand and engage with policy decisions that affect their lives.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Using advanced AI technology, we analyze complex policy documents, legislation, and civic initiatives to provide clear, unbiased insights. Our platform helps users:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Understand complex policy documents</li>
                <li>Track legislative changes</li>
                <li>Access unbiased analysis of civic initiatives</li>
                <li>Make informed decisions about civic matters</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of experts in artificial intelligence, public policy, and civic engagement. We combine technical expertise with a deep understanding of civic processes to create tools that truly serve the public interest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Transparency</h3>
                  <p className="text-gray-600">We believe in open and honest communication about our methods and findings.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Accuracy</h3>
                  <p className="text-gray-600">We are committed to providing precise and reliable information.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Accessibility</h3>
                  <p className="text-gray-600">We strive to make complex information understandable for everyone.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                  <p className="text-gray-600">We continuously improve our technology to better serve our users.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage; 