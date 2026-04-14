import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const BrokerComparisonSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-normal text-black mb-4">
              Compare and choose
            </h2>
            <h3 className="text-4xl font-normal text-blue-600 mb-12">
              Best Stock Broker for you
            </h3>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-center justify-between bg-blue-50 rounded-2xl p-6 border-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-white font-bold text-sm">A</div>
                  </div>
                  <span className="font-semibold text-lg text-black">Angel One</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between bg-blue-50 rounded-2xl p-6 border-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-white font-bold text-sm">Z</div>
                  </div>
                  <span className="font-semibold text-lg text-black">Zerodha</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold h-auto">
              Compare
            </Button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* 3D Isometric Illustration */}
              <div className="w-96 h-96 flex items-center justify-center">
                <div className="relative">
                  {/* Main figure */}
                  <div className="relative z-10">
                    <div className="w-16 h-20 bg-blue-400 rounded-t-full mx-auto mb-2"></div>
                    <div className="w-20 h-24 bg-blue-500 rounded-lg mx-auto"></div>
                    <div className="w-12 h-16 bg-blue-600 rounded-lg mx-auto mt-1"></div>
                  </div>
                  
                  {/* Rocket */}
                  <div className="absolute -top-8 -right-12 transform rotate-45">
                    <div className="w-3 h-12 bg-gray-400 rounded-full"></div>
                    <div className="w-4 h-3 bg-red-500 rounded-full -mt-1 mx-auto"></div>
                  </div>
                  
                  {/* Charts and data elements */}
                  <div className="absolute -left-16 top-8">
                    <div className="w-20 h-12 bg-cyan-200 rounded-lg transform rotate-12"></div>
                  </div>
                  
                  <div className="absolute -right-20 top-12">
                    <div className="space-y-1">
                      <div className="w-8 h-8 bg-orange-400 rounded"></div>
                      <div className="w-8 h-6 bg-cyan-400 rounded"></div>
                      <div className="w-8 h-10 bg-purple-400 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Geometric shapes */}
                  <div className="absolute -bottom-8 -left-8">
                    <div className="space-y-2">
                      <div className="w-6 h-6 bg-cyan-300 transform rotate-45"></div>
                      <div className="w-4 h-4 bg-orange-300 transform rotate-45"></div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-16">
                    <div className="flex space-x-1">
                      <div className="w-3 h-8 bg-purple-400 rounded"></div>
                      <div className="w-3 h-12 bg-cyan-400 rounded"></div>
                      <div className="w-3 h-6 bg-orange-400 rounded"></div>
                      <div className="w-3 h-10 bg-green-400 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Circular chart */}
                  <div className="absolute top-16 -right-24">
                    <div className="w-12 h-12 border-4 border-purple-400 rounded-full">
                      <div className="w-full h-full border-2 border-orange-300 rounded-full transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokerComparisonSection;
