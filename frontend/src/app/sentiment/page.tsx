'use client';

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Twitter, MessageCircle, Newspaper, TrendingUp, TrendingDown, Users } from 'lucide-react';
import Card from '../../../components/Card';
import Navbar from '../../../components/Navbar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import Footer from '../../../components/Footer';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SentimentPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | '90d'>('7d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRange]);

  const sentimentTrends = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Positive',
        data: [65, 70, 62, 75, 80, 85, 82],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Negative',
        data: [35, 30, 38, 25, 20, 15, 18],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value: number) => `${value}%`,
        },
      },
    },
  };

  const topTopics = [
    { name: 'Healthcare Reform', sentiment: 75, volume: 12500, trending: true },
    { name: 'Climate Policy', sentiment: 62, volume: 9800, trending: true },
    { name: 'Education Bill', sentiment: 58, volume: 7600, trending: false },
    { name: 'Tax Reform', sentiment: 45, volume: 6200, trending: false },
    { name: 'Immigration', sentiment: 42, volume: 5400, trending: true },
  ];

  const platformMetrics = [
    {
      platform: 'Twitter',
      icon: Twitter,
      mentions: '45.2K',
      sentiment: 68,
      change: '+12%',
    },
    {
      platform: 'Reddit',
      icon: MessageCircle,
      mentions: '28.7K',
      sentiment: 72,
      change: '+8%',
    },
    {
      platform: 'News Media',
      icon: Newspaper,
      mentions: '15.4K',
      sentiment: 64,
      change: '-3%',
    },
  ];

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Social Media Sentiment</h1>
        <p className="text-gray-600">Track public opinion and sentiment trends across social platforms</p>
      </div>

      {/* Time Range Selector */}
      <div className="mb-6">
        <div className="inline-flex rounded-md shadow-sm">
          {(['24h', '7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium ${
                timeRange === range
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 first:rounded-l-md last:rounded-r-md -ml-px first:ml-0`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Platform Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {platformMetrics.map((metric) => (
          <Card key={metric.platform} className="relative overflow-hidden">
            <div className="flex items-center mb-4">
              <metric.icon className="h-5 w-5 text-gray-400 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">{metric.platform}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Mentions</p>
                <p className="text-2xl font-bold text-gray-900">{metric.mentions}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Sentiment</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-gray-900 mr-2">{metric.sentiment}%</p>
                  <span className={metric.change.startsWith('+') ? 'text-success-600' : 'text-error-600'}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Sentiment Trend Chart */}
      <Card title="Sentiment Trends" className="mb-8">
        <div className="h-96">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <div className="animate-pulse text-gray-400">Loading chart data...</div>
            </div>
          ) : (
            <Line 
              data={sentimentTrends} 
              options={{
                ...chartOptions,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      callback: function(this: any, tickValue: number | string) {
                        return `${tickValue}%`;
                      }
                    }
                  }
                }
              }} 
            />
          )}
        </div>
      </Card>

      {/* Top Topics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Top Discussion Topics">
          <div className="space-y-4">
            {topTopics.map((topic) => (
              <div key={topic.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  {topic.trending ? (
                    <TrendingUp className="h-5 w-5 text-success-500 mr-3" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-error-500 mr-3" />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900">{topic.name}</h4>
                    <p className="text-sm text-gray-500">
                      {topic.volume.toLocaleString()} mentions
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${topic.sentiment}%` }}
                    />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {topic.sentiment}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Demographic Insights">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-900">Age Groups</span>
              </div>
              <div className="text-sm text-gray-500">Sentiment Distribution</div>
            </div>
            {[
              { group: '18-24', positive: 72, neutral: 18, negative: 10 },
              { group: '25-34', positive: 65, neutral: 22, negative: 13 },
              { group: '35-44', positive: 58, neutral: 25, negative: 17 },
              { group: '45-54', positive: 52, neutral: 28, negative: 20 },
              { group: '55+', positive: 48, neutral: 32, negative: 20 },
            ].map((age) => (
              <div key={age.group} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-900">{age.group}</span>
                  <span className="text-gray-500">
                    {age.positive}% positive
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-success-500 via-warning-500 to-error-500"
                    style={{
                      width: '100%',
                      background: `linear-gradient(to right, 
                        #10B981 0%, #10B981 ${age.positive}%, 
                        #F59E0B ${age.positive}%, #F59E0B ${age.positive + age.neutral}%, 
                        #EF4444 ${age.positive + age.neutral}%, #EF4444 100%)`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SentimentPage;