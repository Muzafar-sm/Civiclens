"use client";
import React from 'react';
import  Link  from 'next/link';
import { Github as GitHub, Twitter, Mail } from 'lucide-react';
import AboutPage from '../src/app/about/page';
import AccessibilityPage from '../src/app/accessibility/page';
import ContactPage from '../src/app/contact/page';
import PrivacyPage from '../src/app/privacy/page';
import TermsPage from '../src/app/terms/page';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="text-primary-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"></path>
                  <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1"></path>
                  <path d="M12 8v8"></path>
                  <path d="m9 11 3 3 3-3"></path>
                  <path d="M19 21H5a2 2 0 0 1-2-2v-6"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2"></path>
                </svg>
              </div>
              <span className="ml-2 font-bold text-lg text-primary-800">CivicLens</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              AI-powered civic policy analysis for a more informed and engaged democracy.
            </p>
            {/* <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-700">
                <GitHub size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-700">
                <Mail size={20} />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/documents" className="text-gray-600 hover:text-primary-700 text-sm">
                  Document Library
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-600 hover:text-primary-700 text-sm">
                  User Guides
                </Link>
              </li>
              <li>
                <Link href="/api1" className="text-gray-600 hover:text-primary-700 text-sm">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary-700 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary-700 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary-700 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legaldisclaimer" className="text-gray-600 hover:text-primary-700 text-sm">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-600 hover:text-primary-700 text-sm">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-700 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-700 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary-700 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-700 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} CivicLens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;