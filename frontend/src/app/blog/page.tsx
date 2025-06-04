"use client";
import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Policy Analysis",
      excerpt: "Exploring how artificial intelligence is transforming the way we understand and analyze policy documents.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Technology",
    },
    {
      title: "Democratizing Policy Understanding",
      excerpt: "How CivicLens is making complex policy documents accessible to everyone.",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Civic Engagement",
      image: "/frontend/src/public/images/democracy.jpg"
    },
    {
      title: "The Role of Data in Modern Governance",
      excerpt: "Understanding how data-driven insights are shaping policy decisions.",
      author: "Dr. Emily Rodriguez",
      date: "March 5, 2024",
      category: "Data Science",
      image: "/frontend/src/public/images/data-governance.jpg"
    }
  ];

  const categories = [
    "Technology",
    "Civic Engagement",
    "Data Science",
    "Policy Analysis",
    "AI & Machine Learning",
    "Democracy"
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Blog</h1>
          
          {/* Categories Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block px-3 py-1 bg-primary-600 rounded-full text-sm mb-4">
                      Featured
                    </span>
                    <h2 className="text-3xl font-bold mb-4">The Future of AI in Policy Analysis</h2>
                    <p className="text-lg mb-4">
                      Exploring how artificial intelligence is transforming the way we understand and analyze policy documents.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Dr. Sarah Johnson
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        March 15, 2024
                      </span>
                      <span className="flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        Technology
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-grey rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="#000000"/>
                <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="#000000"/>
</svg>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest insights on policy analysis and civic technology.
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BlogPage; 