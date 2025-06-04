"use client";
import React from 'react';
import { Briefcase, Users, Heart, Zap } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our AI team to build and improve our policy analysis algorithms."
    },
    {
      title: "Policy Analyst",
      department: "Research",
      location: "Washington, DC",
      type: "Full-time",
      description: "Help analyze and structure policy documents for our AI system."
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful and accessible user interfaces for our platform."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-primary-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-600" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career development"
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Join Our Team</h1>
          
          {/* Company Culture Section */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Culture</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At CivicLens, we're building the future of civic engagement through technology. We believe in creating an inclusive, innovative environment where everyone can make a difference.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Job Openings Section */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Open Positions</h2>
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                      <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Application Process Section */}
          <section className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Application Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 font-semibold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Apply</h3>
                  <p className="text-gray-600">Submit your application</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 font-semibold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Review</h3>
                  <p className="text-gray-600">Initial screening</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 font-semibold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Interview</h3>
                  <p className="text-gray-600">Technical & cultural fit</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 font-semibold">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Offer</h3>
                  <p className="text-gray-600">Join the team</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CareersPage; 