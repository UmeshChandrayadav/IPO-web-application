
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, TrendingUp, Calendar, DollarSign, Building, Users, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock detailed IPO data
const mockIPODetail = {
  id: 1,
  companyName: "TechFlow Solutions",
  logo: "/placeholder.svg",
  description: "TechFlow Solutions is a leading technology company specializing in cloud infrastructure and AI-powered business solutions. The company has shown consistent growth over the past 5 years with a strong presence in the enterprise market.",
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
  drhpUrl: "#",
  detailedInfo: {
    faceValue: "₹10",
    lotSize: "100 shares",
    category: "Main Board",
    marketMaker: "Yes",
    subscriptionRatio: "15.6x",
    qibSubscription: "22.3x",
    hniSubscription: "8.9x",
    retailSubscription: "12.1x",
    totalShares: "1,92,30,769 shares",
    freshIssue: "₹1,500 Cr",
    offerForSale: "₹1,000 Cr",
    leadManagers: ["Kotak Mahindra Capital", "ICICI Securities", "Axis Capital"],
    registrar: "Kfin Technologies Limited",
    marketLot: "100 shares and in multiples thereof"
  },
  financials: {
    revenue2023: "₹3,450 Cr",
    revenue2022: "₹2,890 Cr",
    revenue2021: "₹2,340 Cr",
    profit2023: "₹456 Cr",
    profit2022: "₹378 Cr",
    profit2021: "₹289 Cr",
    eps2023: "₹18.5",
    eps2022: "₹15.2",
    eps2021: "₹11.8",
    peRatio: "7.5x",
    bookValue: "₹85.2"
  }
};

const IPODetail = () => {
  const { id } = useParams();
  const ipo = mockIPODetail; // In real app, fetch by ID

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-500';
      case 'Listed': return 'bg-blue-500';
      case 'Upcoming': return 'bg-yellow-500';
      case 'Closed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                BLUESTOCK
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to IPOs</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img src={ipo.logo} alt={ipo.companyName} className="w-16 h-16 rounded-xl bg-gray-100" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{ipo.companyName}</h1>
                <div className="flex items-center space-x-3 mt-2">
                  <Badge className={`${getStatusColor(ipo.status)} text-white`}>
                    {ipo.status}
                  </Badge>
                  <span className="text-gray-600">{ipo.issueType}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Price Band</div>
              <div className="text-2xl font-bold text-purple-600">{ipo.priceBand}</div>
            </div>
          </div>

          <p className="text-gray-600 text-lg max-w-4xl">{ipo.description}</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{ipo.issueSize}</div>
              <div className="text-sm text-gray-600">Issue Size</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{ipo.openingDate}</div>
              <div className="text-sm text-gray-600">Opening Date</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{ipo.returns}</div>
              <div className="text-sm text-gray-600">Current Returns</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Building className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{ipo.currentPrice}</div>
              <div className="text-sm text-gray-600">Current Price</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Issue Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Face Value</span>
                      <p className="font-semibold">{ipo.detailedInfo.faceValue}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Lot Size</span>
                      <p className="font-semibold">{ipo.detailedInfo.lotSize}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Category</span>
                      <p className="font-semibold">{ipo.detailedInfo.category}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Market Maker</span>
                      <p className="font-semibold">{ipo.detailedInfo.marketMaker}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Fresh Issue</span>
                      <p className="font-semibold">{ipo.detailedInfo.freshIssue}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Offer for Sale</span>
                      <p className="font-semibold">{ipo.detailedInfo.offerForSale}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Parties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-600">Lead Managers</span>
                    <ul className="mt-1">
                      {ipo.detailedInfo.leadManagers.map((manager, index) => (
                        <li key={index} className="font-semibold">{manager}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Registrar</span>
                    <p className="font-semibold">{ipo.detailedInfo.registrar}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financials" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">FY 2023</span>
                      <span className="font-semibold">{ipo.financials.revenue2023}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">FY 2022</span>
                      <span className="font-semibold">{ipo.financials.revenue2022}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">FY 2021</span>
                      <span className="font-semibold">{ipo.financials.revenue2021}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profitability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Net Profit 2023</span>
                      <span className="font-semibold">{ipo.financials.profit2023}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">EPS 2023</span>
                      <span className="font-semibold">{ipo.financials.eps2023}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">P/E Ratio</span>
                      <span className="font-semibold">{ipo.financials.peRatio}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Book Value</span>
                      <span className="font-semibold">{ipo.financials.bookValue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{ipo.detailedInfo.subscriptionRatio}</div>
                    <div className="text-sm text-gray-600">Overall</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{ipo.detailedInfo.qibSubscription}</div>
                    <div className="text-sm text-gray-600">QIB</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{ipo.detailedInfo.hniSubscription}</div>
                    <div className="text-sm text-gray-600">HNI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{ipo.detailedInfo.retailSubscription}</div>
                    <div className="text-sm text-gray-600">Retail</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Official Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-16 flex items-center justify-center space-x-3 border-2 border-dashed border-gray-300 hover:border-purple-400 hover:bg-purple-50"
                  >
                    <FileText className="w-6 h-6 text-purple-600" />
                    <div className="text-left">
                      <div className="font-semibold">Red Herring Prospectus</div>
                      <div className="text-sm text-gray-600">Download RHP</div>
                    </div>
                    <Download className="w-4 h-4 text-gray-400" />
                  </Button>

                  <Button 
                    variant="outline" 
                    className="h-16 flex items-center justify-center space-x-3 border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                  >
                    <FileText className="w-6 h-6 text-blue-600" />
                    <div className="text-left">
                      <div className="font-semibold">Draft Red Herring Prospectus</div>
                      <div className="text-sm text-gray-600">Download DRHP</div>
                    </div>
                    <Download className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IPODetail;
