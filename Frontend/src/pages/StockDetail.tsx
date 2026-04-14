
import React, { useState } from 'react';
import { ArrowLeft, Star, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StockDetail = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">RELIANCE</h1>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-600">₹2500.08</span>
                <span className="text-green-600 font-medium">▲ +5.70</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Star
                className={`w-5 h-5 ${
                  isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                }`}
              />
            </Button>
            <Button variant="ghost" size="icon">
              <RefreshCw className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <Tabs defaultValue="chart" className="w-full">
        <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent h-auto p-0 rounded-none">
          <TabsTrigger
            value="chart"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent rounded-none px-6 py-3"
          >
            Chart
          </TabsTrigger>
          <TabsTrigger
            value="overview"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent rounded-none px-6 py-3"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="technical"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent rounded-none px-6 py-3"
          >
            Technical
          </TabsTrigger>
          <TabsTrigger
            value="fundamental"
            className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent rounded-none px-6 py-3"
          >
            Fundamental
          </TabsTrigger>
        </TabsList>

        {/* Content Area */}
        <div className="bg-gray-900 min-h-[500px] flex items-center justify-center">
          <TabsContent value="chart" className="m-0 w-full h-full">
            <div className="flex items-center justify-center h-96">
              <p className="text-white text-2xl font-bold">
                Data Coming From API Endpoints
              </p>
            </div>
          </TabsContent>
          <TabsContent value="overview" className="m-0 w-full h-full">
            <div className="flex items-center justify-center h-96">
              <p className="text-white text-2xl font-bold">
                Overview Data Coming From API
              </p>
            </div>
          </TabsContent>
          <TabsContent value="technical" className="m-0 w-full h-full">
            <div className="flex items-center justify-center h-96">
              <p className="text-white text-2xl font-bold">
                Technical Analysis Data
              </p>
            </div>
          </TabsContent>
          <TabsContent value="fundamental" className="m-0 w-full h-full">
            <div className="flex items-center justify-center h-96">
              <p className="text-white text-2xl font-bold">
                Fundamental Analysis Data
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default StockDetail;
