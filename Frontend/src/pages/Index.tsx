
import {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, Calendar, DollarSign, Building, Download, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {AppContent} from '../context/AppContext.jsx';
import { logout } from '../api/Api.jsx'; // Adjust the import path as necessary
import Footer from '@/components/Footer.js';
import { toast } from 'sonner';

// Mock IPO data
const mockIPOs = [
  {
    id: 1,
    companyName: "TechFlow Solutions",
    logo: "/placeholder.svg",
    priceBand: "₹120 - ₹140",
    issueSize: "₹2,500 Cr",
    issueType: "Book Built",
    openingDate: "2024-06-15",
    closingDate: "2024-06-18",
    listingDate: "2024-06-25",
    status: "Open",
    ipoPrice: "₹130",
    listingPrice: "₹155",
    listingGain: "19.23%",
    currentPrice: "₹168",
    returns: "29.23%",
    rhpUrl: "#",
    drhpUrl: "#"
  },
  {
    id: 2,
    companyName: "GreenEnergy Corp",
    logo: "/placeholder.svg",
    priceBand: "₹85 - ₹95",
    issueSize: "₹1,800 Cr",
    issueType: "Fixed Price",
    openingDate: "2024-06-10",
    closingDate: "2024-06-13",
    listingDate: "2024-06-20",
    status: "Listed",
    ipoPrice: "₹90",
    listingPrice: "₹98",
    listingGain: "8.89%",
    currentPrice: "₹102",
    returns: "13.33%",
    rhpUrl: "#",
    drhpUrl: "#"
  },
  {
    id: 3,
    companyName: "Digital Innovations Ltd",
    logo: "/placeholder.svg",
    priceBand: "₹200 - ₹220",
    issueSize: "₹3,200 Cr",
    issueType: "Book Built",
    openingDate: "2024-06-25",
    closingDate: "2024-06-28",
    listingDate: "2024-07-05",
    status: "Upcoming",
    ipoPrice: "₹210",
    listingPrice: "-",
    listingGain: "-",
    currentPrice: "-",
    returns: "-",
    rhpUrl: "#",
    drhpUrl: "#"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Open': return 'bg-green-500';
    case 'Listed': return 'bg-blue-500';
    case 'Upcoming': return 'bg-yellow-500';
    case 'Closed': return 'bg-gray-500';
    default: return 'bg-gray-500';
  }
};

const Index = () => {
  const { isLoggedIn, setIsLoggedIn, user } = useContext<any>(AppContent);
  const navigate = useNavigate();
  const userLogout = async () => {
      try {
          const response = await logout();
          response.data.success && setIsLoggedIn(false)
          toast.success(response.data.message);
          navigate("/")
      }catch (err) {
          toast.error(err.message);
      }
  };


  return (
    <div className="min-h-screen bg-background">
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
              <Link to={"/"} className="text-gray-600 hover:text-gray-900 transition-colors">IPOs</Link>
              <Link to={"/"} className="text-gray-600 hover:text-gray-900 transition-colors">Market</Link>
              <Link to={"/"} className="text-gray-600 hover:text-gray-900 transition-colors">Research</Link>
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
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            IPO Investment Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover, track, and invest in the latest Initial Public Offerings with comprehensive data and professional insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <TrendingUp className="w-5 h-5 mr-2" />
              Explore IPOs
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <Calendar className="w-5 h-5 mr-2" />
              View Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Active IPOs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹50,000 Cr</div>
              <div className="text-gray-600">Total Issue Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25.5%</div>
              <div className="text-gray-600">Avg. Listing Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600">Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* IPO Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current IPO Opportunities</h2>
            <p className="text-gray-600">Explore the latest public offerings with detailed analysis</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockIPOs.map((ipo) => (
              <Card key={ipo.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <img src={ipo.logo} alt={ipo.companyName} className="w-12 h-12 rounded-lg bg-gray-100" />
                      <div>
                        <CardTitle className="text-lg font-semibold">{ipo.companyName}</CardTitle>
                        <Badge className={`${getStatusColor(ipo.status)} text-white text-xs`}>
                          {ipo.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Price Band</span>
                      <p className="font-semibold">{ipo.priceBand}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Issue Size</span>
                      <p className="font-semibold">{ipo.issueSize}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Opening Date</span>
                      <p className="font-semibold">{ipo.openingDate}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Closing Date</span>
                      <p className="font-semibold">{ipo.closingDate}</p>
                    </div>
                  </div>

                  {ipo.status === 'Listed' && (
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Current Returns</span>
                        <span className="font-bold text-green-600">{ipo.returns}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-600">Current Price</span>
                        <span className="font-semibold">{ipo.currentPrice}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      RHP
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      DRHP
                    </Button>
                    <Link to={`/ipo/${ipo.id}`} className="flex-1">
                      <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  
     </div>
  );
};

export default Index;
