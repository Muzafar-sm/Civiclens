import Link from 'next/link';
import Button from './Button';
import { Upload } from 'lucide-react';

export default function Navbar() {
  return (
<nav className="bg-black text-white p-4 shadow-md">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"></path>
        <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1"></path>
        <path d="M12 8v8"></path>
        <path d="m9 11 3 3 3-3"></path>
        <path d="M19 21H5a2 2 0 0 1-2-2v-6"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2"></path>
      </svg>
      <Link href="/">
        <h1 className="text-3xl font-bold cursor-pointer ml-2">CivicLens</h1>
      </Link>
    </div>
    <div className="flex space-x-4">
      <Link href="/dashboard" className="text-gray-200 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 px-3 py-2 text-m font-medium">Dashboard</Link>
      <Link href="/analyze" className="text-gray-200 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 px-3 py-2 text-m font-medium">Analyze</Link>
      <Link href="/sentiment" className="text-gray-200 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 px-3 py-2 text-m font-medium">Sentiment</Link>
      <div className="hidden md:flex items-center space-x-2">
              <Link href="/analyze">
                <Button variant="outline" size="sm" icon={<Upload className="h-4 w-4" />}>
                  Upload
                </Button>
              </Link>
              </div>
          
    </div>
  </div>
</nav>

  );
}