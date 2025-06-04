export interface Document {
    id: string;
    title: string;
    source: string;
    content: string;
    type: 'pdf' | 'text' | 'link';
    dateAdded: Date;
    pages?: number;
  }
  
  export interface Summary {
    expert: string;
    citizen: string;
    simplified: string;
  }
  
  export interface Question {
    id: string;
    text: string;
    answer: string;
    documentId: string;
    timestamp: Date;
  }
  
  export interface SentimentData {
    positive: number;
    neutral: number;
    negative: number;
    sources: {
      twitter: number;
      reddit: number;
      news: number;
    };
    topics: Array<{
      name: string;
      count: number;
      sentiment: 'positive' | 'neutral' | 'negative';
    }>;
  }
  
  export interface StanceAnalysis {
    pro: string[];
    con: string[];
  }
  
  export interface UserPreferences {
    theme: 'light' | 'dark' | 'system';
    fontSize: 'small' | 'medium' | 'large';
    language: string;
  }