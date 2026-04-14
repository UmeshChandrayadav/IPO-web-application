
import React from 'react';
import { ExternalLink } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    {
      title: 'NSE India',
      logo: '🏢',
      url: 'https://www.nseindia.com',
      description: 'National Stock Exchange'
    },
    {
      title: 'BSE India',
      logo: '📈',
      url: 'https://www.bseindia.com',
      description: 'Bombay Stock Exchange'
    },
    {
      title: 'SEBI',
      logo: '🏛️',
      url: 'https://www.sebi.gov.in',
      description: 'Securities and Exchange Board'
    },
    {
      title: 'Money Control',
      logo: '💰',
      url: 'https://www.moneycontrol.com',
      description: 'Financial News & Analysis'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
      <div className="space-y-3">
        {links.map((link, index) => (
          <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{link.logo}</div>
              <div>
                <h4 className="font-medium text-gray-900">{link.title}</h4>
                <p className="text-xs text-gray-500">{link.description}</p>
              </div>
            </div>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors duration-200"
            >
              <span className="text-sm font-medium">Visit Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
