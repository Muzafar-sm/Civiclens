import { NextResponse } from 'next/server';
import { analyzeDocument } from '@/lib/ai';
import pdfParse from 'pdf-parse';

export const runtime = 'nodejs'; // This is important for file handling
console.log("🔥 Starting POST upload handler");
console.trace(); // Print stack trace

export async function POST(request: Request) {
  try {
    // Check if API key is available
    if (!process.env.HUGGINGFACE_API_KEY) {
      console.error('HUGGINGFACE_API_KEY is not set');
      return NextResponse.json(
        { error: 'API configuration error: Hugging Face API key is missing' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      console.error('No file provided in request');
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    console.log('Processing file:', {
      name: file.name,
      size: file.size,
      type: file.type
    });

    let text: string;
    
    // Handle different file types
    if (file.type === 'application/pdf') {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdfData = await pdfParse(Buffer.from(arrayBuffer));
        text = pdfData.text;
        console.log('PDF parsed successfully, text length:', text.length);
      } catch (error) {
        console.error('PDF parsing error:', error);
        return NextResponse.json(
          { error: 'Failed to parse PDF file. Please ensure it is a valid PDF document.' },
          { status: 400 }
        );
      }
    } else if (file.type === 'text/plain' || 
               file.type === 'application/msword' || 
               file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      try {
        text = await file.text();
        console.log('Text file processed successfully, text length:', text.length);
      } catch (error) {
        console.error('Text file processing error:', error);
        return NextResponse.json(
          { error: 'Failed to process text file. Please ensure it is a valid document.' },
          { status: 400 }
        );
      }
    } else {
      console.error('Unsupported file type:', file.type);
      return NextResponse.json(
        { error: 'Unsupported file type. Please upload a PDF, Word document, or text file.' },
        { status: 400 }
      );
    }

    if (!text || text.length === 0) {
      console.error('No text content found in file');
      return NextResponse.json(
        { error: 'No text content found in file. Please ensure the document contains readable text.' },
        { status: 400 }
      );
    }

    // Limit text length to prevent token limit issues
    const maxLength = 1000; // Adjust this based on model requirements
    if (text.length > maxLength) {
      console.log(`Text truncated from ${text.length} to ${maxLength} characters`);
      text = text.substring(0, maxLength);
    }

    // Analyze the document using AI
    console.log('Starting AI analysis...');
    const analysis = await analyzeDocument(text);
    console.log('AI analysis completed successfully');

    // Return the analysis results
    return NextResponse.json({
      id: 'doc_' + Date.now(),
      title: file.name,
      ...analysis
    });
  } catch (error) {
    console.error('Upload error details:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unexpected error occurred while processing the upload' },
      { status: 500 }
    );
  }
} 