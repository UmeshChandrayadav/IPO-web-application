import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">NEW</span>
              <span className="font-medium">App 2.0</span>
              <span className="ml-2">→</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Free & Open<br />
              Stock Market Analytics<br />
              For GenZ
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thousands of traders and investors in India use our<br />
              stable and reliable mobile app regularly.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get early access</h3>
              <div className="flex items-center max-w-md">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                  <span className="px-4 py-3 text-gray-600 border-r border-gray-300">+91</span>
                  <Input 
                    type="tel" 
                    placeholder="Enter mobile number"
                    className="border-0 focus-visible:ring-0 px-4 py-3 flex-1"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 m-1 px-4 py-2">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Placeholder for hero image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  📱
                </div>
                <p>Mobile App Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
