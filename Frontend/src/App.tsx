
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import SharkInvestor from "./pages/SharkInvestor";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import IPODetail from "./pages/IPODetail";
import LandingPage from "./pages/LandingPage";
import StockDetail from "./pages/StockDetail";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import Authsuccess from "./pages/Authsuccess";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Footer from "@/components/Footer.js";
import Ipohome from "./pages/Ipohome"


const queryClient = new QueryClient();

const App = () => { 
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/shark-investor" element={<SharkInvestor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ipo/:id" element={<IPODetail />} />
            <Route path="/stock/:symbol" element={<StockDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/authsuccess" element={<Authsuccess />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          {/* Dashboard sub-routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-ipo" element={<Ipohome/>} />
            {/* <Route path="/upcoming-ipo" element={<Ipohome/>} /> */}
            <Route path="/ipo-subscription" element={<Dashboard />} />
            <Route path="/ipo-allotment" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
            <Route path="/api-manager" element={<Dashboard />} />
            <Route path="/accounts" element={<Dashboard />} />
            <Route path="/help" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
