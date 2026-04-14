
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Download,
  CheckCircle,
  Smartphone,
  Globe,
  Video
} from 'lucide-react';
import BluestockLogo from '@/components/BluestockLogo';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {AppContent} from '../context/AppContext.jsx';
import { logout } from '../api/Api.jsx'; // Adjust the import path as necessary
import { toast } from 'sonner';

const Home = () => {

  const { isLoggedIn, setIsLoggedIn, user } = useContext<any>(AppContent);
  const navigate = useNavigate();


  const userLogout = async () => {
        try {
            const response = await logout();
            response.data.success && setIsLoggedIn(false);
            toast.success(response.data.message);
            navigate("/");
        }catch (err) {
            toast.error(err.message);
        }
    }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="logo" className="h-4 b-2 sm:h-8 sm:b-4"/>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to={"/home"} className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link to={"/"} className="text-gray-600 hover:text-gray-900 transition-colors">Support</Link>
              <Link to={"/"} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            </div>
            <div className="flex items-center space-x-3">
              {user && (
                <div className="flex items-center space-x-2">
                  {user.profilePicture ?  
                    <img src={user.profilePicture} alt="User Avatar" className="w-8 h-8 rounded-full" />
                  :
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 font-medium">{user.name ? user.name.charAt(0).toUpperCase() : 'U'}</span>
                    </div>
                  }
                </div>
              )}
              {isLoggedIn ? <>
                <Button className="bg-[#685cff]" onClick={userLogout}>
                  Logout
                </Button>
              </>: <>
              <Link to="/login">
                  <Button className="bg-[#685cff]">
                      Login
                  </Button>
              </Link>
              <Link to="/signup">
                  <Button className="bg-[#685cff]">
                      Sign Up
                  </Button>
              </Link>
              </>
              }
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              Free & Open
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stock Market Analytics For GenZ
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The youth of India need a stock and analytics platform to earn money while studying with their parents online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Free Information
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <BarChart3 className="w-32 h-32 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              It's easy<br />
              It's powerful<br />
              It's beautiful
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Bluestock Highlights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Learn Chart Column */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <BarChart3 className="w-5 h-5 text-green-500 mr-2" />
                    Learn Chart
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Technical Analysis/Financial
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Strategy, Data, Equity
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Risk Assessment
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Option Trading
                    </div>
                  </div>
                </div>

                {/* Analytics Column */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    Analytics
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Live Market Feed
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      IPO Detail
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Stock Watchlist
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Portfolio tracking
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-96 flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Traders Love Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Why do traders love bluestock?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent>
                <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Mobile First</h3>
                <p className="text-gray-600 text-sm">
                  Optimized for mobile trading on the go
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent>
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Blog</h3>
                <p className="text-gray-600 text-sm">
                  Educational content and market insights
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent>
                <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Videos</h3>
                <p className="text-gray-600 text-sm">
                  Learn through video tutorials and analysis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* On The Go Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">On The Go</h2>
              <p className="text-gray-600 mb-8">
                Bluestock is available on mobile to track investment performance. 
                Download the Bluestock App and start trading from anywhere anytime.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-200 rounded"></div>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">Scan and download</p>
                  <p className="text-gray-600 text-sm">
                    Use your smartphone camera to scan and get direct app access from app store.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-96 flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
