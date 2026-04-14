
import React from 'react';
import { TrendingUp } from 'lucide-react';

const IPOStats = () => {
  const stats = [
    {
      title: 'Total IPO',
      value: 30,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'IPO in Gain',
      value: 20,
      color: 'bg-cyan-500',
      textColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      title: 'IPO in Loss',
      value: 9,
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">IPO Dashboard India</h2>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-medium">↑ 20 IPO in Gain</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-lg p-6 text-center`}>
            <div className={`w-20 h-20 mx-auto mb-4 ${stat.color} rounded-full flex items-center justify-center`}>
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
            <h3 className={`text-lg font-semibold ${stat.textColor} mb-2`}>{stat.title}</h3>
            <p className="text-sm text-gray-600">Current count</p>
          </div>
        ))}
      </div>

      {/* Additional insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">Market Performance: Positive</span>
          </div>
          <p className="text-xs text-green-600 mt-1">66.7% IPOs are in gain</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-800">Total Market Cap</span>
          </div>
          <p className="text-xs text-blue-600 mt-1">₹12,450 Cr approx</p>
        </div>
      </div>
    </div>
  );
};

export default IPOStats;
