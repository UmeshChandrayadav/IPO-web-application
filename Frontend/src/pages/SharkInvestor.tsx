
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import BluestockLogo from '@/components/BluestockLogo';
import { 
  Search, 
  Bell, 
  User, 
  TrendingUp, 
  DollarSign, 
  Users, 
  BarChart3,
  Filter,
  Star,
  Eye
} from 'lucide-react';

const investors = [
  {
    name: "Rajeev Jaigoswami",
    role: "Angel Investor",
    image: "/placeholder.svg",
    description: "Serial entrepreneur and angel investor with expertise in fintech",
    portfolio: "$2.5M",
    returns: "+24.5%",
    rating: 4.8
  },
  {
    name: "Anil Goel",
    role: "Venture Capitalist",
    image: "/placeholder.svg",
    description: "Managing Partner at leading VC firm focusing on early-stage startups",
    portfolio: "$15.2M",
    returns: "+31.2%",
    rating: 4.9
  },
  {
    name: "Ashish Sharma",
    role: "Strategic Advisor",
    image: "/placeholder.svg",
    description: "Former banking executive with 20+ years in financial services",
    portfolio: "$8.7M",
    returns: "+18.9%",
    rating: 4.7
  },
  {
    name: "Ashish Kacholia",
    role: "Portfolio Manager",
    image: "/placeholder.svg",
    description: "Renowned portfolio manager and equity research analyst",
    portfolio: "$45.8M",
    returns: "+42.1%",
    rating: 5.0
  },
  {
    name: "Dolly Rajpara Khanna",
    role: "Investment Strategist",
    image: "/placeholder.svg",
    description: "Investment strategist specializing in market analysis",
    portfolio: "$12.4M",
    returns: "+28.7%",
    rating: 4.6
  },
  {
    name: "Nemruddha Kathari",
    role: "Financial Advisor",
    image: "/placeholder.svg",
    description: "Certified financial planner and wealth management expert",
    portfolio: "$6.9M",
    returns: "+22.3%",
    rating: 4.5
  }
];

const SharkInvestor = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background blur effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Top Navigation Bar */}
        <header className="backdrop-blur-xl bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <BluestockLogo size="sm" />
              
              {/* Search Bar */}
              <div className="flex-1 max-w-lg mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search investors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/15 focus:border-blue-400 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Right side icons */}
              <div className="flex items-center space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Users, label: "Active Investors", value: "1,247", change: "+12%" },
              { icon: DollarSign, label: "Total Portfolio", value: "$2.8B", change: "+8.5%" },
              { icon: TrendingUp, label: "Avg Returns", value: "28.7%", change: "+5.2%" },
              { icon: BarChart3, label: "Success Rate", value: "94.2%", change: "+2.1%" }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                      <p className="text-green-400 text-xs mt-1">{stat.change}</p>
                    </div>
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Dashboard Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-80">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Filters</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Investment Range</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:bg-white/15 focus:border-blue-400">
                        <option>All Ranges</option>
                        <option>$1M - $10M</option>
                        <option>$10M - $50M</option>
                        <option>$50M+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Expertise</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:bg-white/15 focus:border-blue-400">
                        <option>All Sectors</option>
                        <option>Fintech</option>
                        <option>Healthcare</option>
                        <option>Technology</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Rating</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:bg-white/15 focus:border-blue-400">
                        <option>All Ratings</option>
                        <option>5 Stars</option>
                        <option>4+ Stars</option>
                        <option>3+ Stars</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Investors Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Shark Investors</h2>
                <p className="text-gray-400">Showing {investors.length} investors</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {investors.map((investor, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <img
                            src={investor.image}
                            alt={investor.name}
                            className="w-16 h-16 rounded-full bg-gray-700 border-2 border-white/20 group-hover:border-blue-400/50 transition-colors"
                          />
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900"></div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-white truncate">{investor.name}</h3>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-300">{investor.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-blue-400 text-sm font-medium mb-2">{investor.role}</p>
                          <p className="text-gray-400 text-xs mb-3 line-clamp-2">{investor.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-gray-400">Portfolio</p>
                              <p className="text-sm font-semibold text-white">{investor.portfolio}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Returns</p>
                              <p className="text-sm font-semibold text-green-400">{investor.returns}</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                              <Eye className="w-4 h-4 mr-1" />
                              View Profile
                            </Button>
                            <Button size="sm" variant="outline" className="border-white/20 text-gray-300 hover:bg-white/10">
                              Follow
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharkInvestor;
