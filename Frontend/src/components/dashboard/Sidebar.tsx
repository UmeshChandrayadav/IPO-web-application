import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Users, 
  Award, 
  Settings, 
  Database, 
  User, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import BluestockLogo from '../BluestockLogo';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: TrendingUp, label: 'Manage IPO', path: '/manage-ipo' },
    { icon: Users, label: 'IPO Subscription', path: '/ipo-subscription' },
    { icon: Award, label: 'IPO Allotment', path: '/ipo-allotment' },
  ];

  const otherItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: Database, label: 'API Manager', path: '/api-manager' },
    { icon: User, label: 'Accounts', path: '/accounts' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        ${isCollapsed ? 'w-16' : 'w-64'} 
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center p-4 border-b border-gray-200">
            <BluestockLogo 
              size="sm"
              showText={!isCollapsed}
              className="transition-all duration-300"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center px-3 py-2 rounded-lg transition-colors duration-200
                    ${isActive(item.path) 
                      ? 'bg-purple-100 text-purple-700 border-r-2 border-purple-700' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              ))}
            </div>

            {/* Others section */}
            <div className="mt-8">
              {!isCollapsed && (
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Others
                </h3>
              )}
              <div className="space-y-2">
                {otherItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center px-3 py-2 rounded-lg transition-colors duration-200
                      ${isActive(item.path) 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3">{item.label}</span>}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Collapse toggle */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex items-center justify-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
