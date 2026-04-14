
import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Shark Portfolios</h1>
          </div>
          <Button variant="ghost" size="icon">
            <HelpCircle className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Tabs Navigation */}
      <Tabs defaultValue="my-stock" className="w-full">
        <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent h-auto p-0 rounded-none">
          <TabsTrigger
            value="overall"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent rounded-none px-6 py-3 text-gray-500"
          >
            Overall
          </TabsTrigger>
          <TabsTrigger
            value="my-stock"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent rounded-none px-6 py-3"
          >
            My Stock
          </TabsTrigger>
        </TabsList>

        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
            />
          </div>
        </div>

        {/* Content Area */}
        <TabsContent value="overall" className="m-0 p-4">
          <div className="text-center py-20">
            <p className="text-gray-500">Overall portfolio data would be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="my-stock" className="m-0 p-4">
          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {/* 404 Illustration */}
            <div className="mb-8 relative">
              {/* Space background */}
              <div className="w-64 h-64 bg-gradient-to-b from-purple-900 via-blue-900 to-black rounded-full relative overflow-hidden">
                {/* Stars */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-12 right-12 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-16 left-16 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                </div>
                
                {/* Planet */}
                <div className="absolute bottom-0 right-4 w-16 h-16 bg-orange-400 rounded-full opacity-80"></div>
                
                {/* Rocket */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-12 bg-blue-500 rounded-t-full relative">
                    {/* Astronaut/Rocket body */}
                    <div className="w-6 h-6 bg-white rounded-full absolute -top-2 left-1"></div>
                    {/* Flames */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-3 bg-orange-400 rounded-b-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* 404 Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-50">404</span>
                </div>
              </div>
            </div>

            {/* Message */}
            <h3 className="text-xl font-bold text-black mb-2">No data found !</h3>
            <p className="text-gray-500">
              Add stocks to your portfolio to see them here
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Portfolio;
