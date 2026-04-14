import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide">PRODUCTS</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide">COMMUNITY</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide">MEDIA</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide">SUPPORT</a>
            <div className="flex items-center">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide">LIVE NEWS</a>
              <Badge className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                NEW
              </Badge>
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium text-sm">Sign In</button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-sm">
              Sign Up Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-lg tracking-wide">PRODUCTS</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-lg tracking-wide">COMMUNITY</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-lg tracking-wide">MEDIA</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-lg tracking-wide">SUPPORT</a>
                    <div className="flex items-center">
                      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-lg tracking-wide">LIVE NEWS</a>
                      <Badge className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        NEW
                      </Badge>
                    </div>
                  </nav>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                    <button className="text-gray-600 hover:text-gray-900 font-medium text-lg text-left">Sign In</button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm w-full">
                      Sign Up Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
