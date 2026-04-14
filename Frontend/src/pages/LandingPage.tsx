
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BluestockLogo from '@/components/BluestockLogo';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Who We Are?', href: '#about' },
    { label: 'Products', href: '#products', hasDropdown: true },
    { label: 'Tools', href: '#tools', hasDropdown: true },
    { label: 'Media', href: '#media', hasDropdown: true },
    { label: 'Support', href: '#support', hasDropdown: true },
    { label: 'Others', href: '#others', hasDropdown: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <BluestockLogo size="sm" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 w-4 h-4" />
                    )}
                  </a>
                </div>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 z-40 bg-black bg-opacity-25" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl z-50 overflow-y-auto">
              {/* Status bar simulation */}
              <div className="flex justify-between items-center px-4 py-2 text-sm font-medium border-b">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                  <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                  <div className="w-6 h-3 bg-gray-400 rounded-sm"></div>
                </div>
              </div>

              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu items */}
              <div className="px-6 py-4 space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className="text-lg font-medium text-gray-900"
                    >
                      {item.label}
                    </a>
                    {item.hasDropdown && (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                ))}

                {/* Auth section */}
                <div className="pt-8 space-y-4">
                  <Link
                    to="/login"
                    className="block text-blue-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            IPO Dashboard India
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track, analyze, and manage IPO investments with comprehensive data and insights from India's leading stock exchanges.
          </p>
          <div className="space-x-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Now
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
