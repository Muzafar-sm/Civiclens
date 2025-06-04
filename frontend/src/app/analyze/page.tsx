'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, Search, BarChart } from 'lucide-react';
import DocumentUpload from '@/components/DocumentUpload';
import DocumentAnalysis from '@/components/DocumentAnalysis';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

interface Document {
  id: string;
  title: string;
  summary: string;
  sentiment: {
    positive: number;
    negative: number;
    neutral: number;
  };
  translations: {
    [key: string]: string;
  };
}

export default function AnalyzePage() {
  const [document, setDocument] = useState<Document | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      console.log('Starting upload for file:', file.name, 'Size:', file.size, 'Type:', file.type);

      const response = await fetch("http://localhost:8000/api/documents/upload", {
        method: "POST",
        body: formData,
      });      

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Upload failed with status:', response.status, 'Error:', errorData);
        throw new Error(errorData.error || `Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('Upload successful:', data);
      setDocument(data);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to upload document. Please try again.';
      setError(errorMessage);
      console.error('Upload error:', err);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-8">
        {!document ? (
          <>
            {/* Upload Section */}
            <section className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Analyze Your Document
                </h2>
                <p className="text-lg text-gray-600">
                  Upload a government bill, policy document, or legislative text to get started
                </p>
              </div>

              {error && (
                <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              <DocumentUpload onUpload={handleUpload} />
            </section>
          </>
        ) : (
          <DocumentAnalysis
            title={document.title}
            documentId={document.id}
            summary={document.summary}
            sentiment={document.sentiment}
            translations={document.translations}
          />
        )}
      </main>
    </div>
    <Footer />
    </>
  );
} 