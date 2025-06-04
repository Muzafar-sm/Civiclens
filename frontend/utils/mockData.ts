
import { Document, Summary, SentimentData, StanceAnalysis } from '../src/types/index';

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Clean Energy Act of 2023',
    source: 'U.S. Congress',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    type: 'pdf',
    dateAdded: new Date('2023-05-15'),
    pages: 24,
  },
  {
    id: '2',
    title: 'Infrastructure Development Bill',
    source: 'State Legislature',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    type: 'pdf',
    dateAdded: new Date('2023-04-20'),
    pages: 32,
  },
  {
    id: '3',
    title: 'Healthcare Reform Initiative',
    source: 'Department of Health',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
    type: 'text',
    dateAdded: new Date('2023-03-10'),
  },
];

export const mockSummary: Summary = {
  expert: 'The Clean Energy Act of 2023 establishes a framework for transitioning to renewable energy sources over a 10-year period. It allocates $50 billion in funding for infrastructure development, research grants, and tax incentives for clean energy producers. The legislation mandates a 40% reduction in carbon emissions by 2030 and establishes a regulatory body to oversee implementation.',
  citizen: 'This act aims to shift the country toward cleaner energy over the next decade. It provides $50 billion for new infrastructure, research, and tax breaks for companies producing clean energy. The law requires a 40% cut in carbon pollution by 2030 and creates a new government office to manage these changes.',
  simplified: 'The Clean Energy Act will help us use cleaner energy like solar and wind power. The government will spend money to build new energy systems and help companies that make clean energy. By 2030, we want to have less pollution. A special team will make sure everything works right.',
};

export const mockSentimentData: SentimentData = {
  positive: 45,
  neutral: 30,
  negative: 25,
  sources: {
    twitter: 65,
    reddit: 25,
    news: 10,
  },
  topics: [
    { name: 'Cost', count: 45, sentiment: 'negative' },
    { name: 'Environment', count: 72, sentiment: 'positive' },
    { name: 'Implementation', count: 38, sentiment: 'neutral' },
    { name: 'Jobs', count: 56, sentiment: 'positive' },
    { name: 'Timeline', count: 29, sentiment: 'neutral' },
  ],
};

export const mockStanceAnalysis: StanceAnalysis = {
  pro: [
    'Reduces carbon emissions and combats climate change',
    'Creates new jobs in the renewable energy sector',
    'Decreases dependency on foreign oil and improves energy security',
    'Provides tax incentives for businesses transitioning to clean energy',
    'Establishes a clear timeline for energy transition with measurable goals',
  ],
  con: [
    'High initial implementation costs may increase national debt',
    'Potential job losses in traditional energy sectors',
    'Timeline may be unrealistic for certain industries to adapt',
    'May lead to higher energy costs for consumers in the short term',
    'Regulatory oversight could create bureaucratic inefficiencies',
  ],
};

export const mockQuestions = [
  {
    id: '1',
    text: 'What are the main goals of this policy?',
    answer: 'The main goals are to reduce carbon emissions by 40% by 2030, transition to renewable energy sources, and create new jobs in the clean energy sector.',
    documentId: '1',
    timestamp: new Date('2023-05-16T10:23:00'),
  },
  {
    id: '2',
    text: 'How much funding is allocated for implementation?',
    answer: 'The policy allocates $50 billion for infrastructure development, research grants, and tax incentives for clean energy producers.',
    documentId: '1',
    timestamp: new Date('2023-05-16T10:25:00'),
  },
  {
    id: '3',
    text: 'Who will oversee the implementation of this policy?',
    answer: 'A newly established regulatory body will oversee the implementation of the policy and ensure compliance with the mandated carbon reduction targets.',
    documentId: '1',
    timestamp: new Date('2023-05-16T10:28:00'),
  },
];