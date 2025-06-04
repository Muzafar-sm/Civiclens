'use client';

export default function TestSpacing() {
  return (
    <div className="flex space-x-6 bg-gray-100 p-4">
      <div className="bg-blue-500 text-white px-4 py-2 rounded">Analyze</div>
      <div className="bg-green-500 text-white px-4 py-2 rounded">Sentiment</div>
      <div className="bg-red-500 text-white px-4 py-2 rounded">Dashboard</div>
    </div>
  );
}
