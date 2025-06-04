'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  FileText, 
  Users, 
  Clock, 
  TrendingUp, 
  AlertCircle,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Document from 'next/document';
import { mockDocuments } from '../../../utils/mockData';

const DashboardPage: React.FC = () => {
  // In a real app, these would come from an API
  const recentDocuments = mockDocuments.slice(0, 3);
  
  const stats = [
    {
      label: 'Total Documents',
      value: '156',
      change: '+12.5%',
      increasing: true,
      icon: FileText
    },
    {
      label: 'Active Users',
      value: '2,847',
      change: '+18.2%',
      increasing: true,
      icon: Users
    },
    {
      label: 'Avg. Processing Time',
      value: '1.2s',
      change: '-8.3%',
      increasing: false,
      icon: Clock
    },
    {
      label: 'Success Rate',
      value: '99.8%',
      change: '+0.2%',
      increasing: true,
      icon: TrendingUp
    }
  ];

  const alerts = [
    {
      title: 'High document processing load',
      description: 'System is experiencing higher than normal document processing volume',
      type: 'warning'
    },
    {
      title: 'New feature available',
      description: 'Multi-language support has been enabled for all users',
      type: 'info'
    }
  ];

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your document analysis and system metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden p-6">
            <div className="absolute top-0 right-0 p-4 text-gray-200">
              <stat.icon className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-500">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <div className={`flex items-center text-sm ${
              stat.increasing ? 'text-success-600' : 'text-error-600'
            }`}>
              {stat.increasing ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              {stat.change}
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Documents */}
        <div className="lg:col-span-2">
          <Card title="Recent Documents" className="h-full p-6">
            <div className="space-y-4">
              {recentDocuments.map((doc: any) => (
                <Link
                  key={doc.id}
                  href={`/documents/${doc.id}`}
                  className="block p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        {doc.title}
                      </h4>
                      <p className="text-sm text-gray-500">{doc.source}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/documents">
                <Button variant="outline">View All Documents</Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* System Alerts */}
        <div>
          <Card title="System Alerts" className="h-full p-6">
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    alert.type === 'warning' 
                      ? 'bg-warning-50 border border-warning-200' 
                      : 'bg-primary-50 border border-primary-200'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <AlertCircle className={`h-5 w-5 ${
                        alert.type === 'warning' 
                          ? 'text-warning-500' 
                          : 'text-primary-500'
                      }`} />
                    </div>
                    <div className="ml-3">
                      <h4 className={`text-sm font-medium ${
                        alert.type === 'warning' 
                          ? 'text-warning-800' 
                          : 'text-primary-800'
                      }`}>
                        {alert.title}
                      </h4>
                      <p className={`mt-1 text-sm ${
                        alert.type === 'warning' 
                          ? 'text-warning-700' 
                          : 'text-primary-700'
                      }`}>
                        {alert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="mt-8">
      <Card title="Document Processing Activity" className="p-6">
          <div className="h-80 flex items-center justify-center text-gray-500">
            <BarChart3 className="h-8 w-8 mr-2" />
            <span>Activity chart would be rendered here</span>
          </div>
        </Card>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DashboardPage;