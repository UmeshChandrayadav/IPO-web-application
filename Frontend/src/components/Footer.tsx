import React from 'react';
import { Twitter, Facebook, Youtube, Linkedin, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-8 md:pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8">
          {/* Resources Column */}
          <div>
            <h3 className="text-gray-700 font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Trading View</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">NSE Holidays</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">e-Voting CDSL</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">e-Voting NSDL</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Market Timings</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-700 font-medium text-sm mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Offerings Column */}
          <div>
            <h3 className="text-gray-700 font-medium text-sm mb-4">Offerings</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Compare Broker</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Fin Calculators</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">IPO</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">All Brokers</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Products</a></li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-gray-700 font-medium text-sm mb-4">Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Shark Investor</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Mutual Funds</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Sitemap</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Indian Indices</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Bug Bounty Program</a></li>
            </ul>
          </div>

          {/* Policy Column */}
          <div>
            <h3 className="text-gray-700 font-medium text-sm mb-4">Policy</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-gray-500 text-xs md:text-sm hover:text-blue-600 transition-colors">Trust & Security</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
            <Twitter size={18} className="md:w-5 md:h-5" />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
            <Facebook size={18} className="md:w-5 md:h-5" />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
            <Youtube size={18} className="md:w-5 md:h-5" />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
            <Linkedin size={18} className="md:w-5 md:h-5" />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
            <Instagram size={18} className="md:w-5 md:h-5" />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
            <Send size={18} className="md:w-5 md:h-5" />
          </a>
        </div>

        {/* Company Information and Disclaimer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 border-t border-gray-200 pt-6 md:pt-8">
          {/* Left Side - Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className=" text-white  rounded text-xs md:text-sm font-medium mr-3 flex items-center">
                {/* <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-sm mr-2"></div>
                BLUESTOCK */}
                <img src="/logo.png" alt="logo" className='w-30 h-6'/>
              </div>
            </div>
            <div className="text-gray-600 text-xs md:text-sm space-y-1">
              <p>Bluestock Fintech</p>
              <p>Pune, Maharashtra</p>
              <p className="mt-2 md:mt-3 font-medium">MSME Registration No.</p>
              <p>UDYAM-MH-01-0158901</p>
            </div>
            <div className="mt-4 md:mt-6">
              <img src="/lovable-uploads/2a14fc33-2cde-461a-b13e-87b680e5db70.png" alt="Startup India" className="h-6 md:h-8" />
            </div>
          </div>

          {/* Right Side - Disclaimer */}
          <div className="text-gray-600 text-xs leading-relaxed">
            <p className="mb-3 md:mb-4">
              Investment in securities markets are subject to market risks, read all the related documents carefully before investing as 
              prescribed by SEBI based in the interest of the investors.
            </p>
            <p className="mb-3 md:mb-4">
              The users can write to <a href="mailto:help@bluestock.in" className="text-blue-600 hover:underline">help@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to 
              <a href="mailto:cto@bluestock.in" className="text-blue-600 hover:underline ml-1">cto@bluestock.in</a>
            </p>
            <p className="mb-3 md:mb-4">
              Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy / 
              sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles 
              are for educational purposes only.
            </p>
            <p>
              Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock 
              markets are subject to market risks.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-xs md:text-sm">Bluestock Fintech All Rights Reserved.</p>
          <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-0">
            Made with ❤️ in Pune, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

