import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Code, Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CardContent } from "@/components/ui/card";
import ReCAPTCHA from "react-google-recaptcha";
import {login, googleLogin } from '../api/api.jsx';
import { AppContent } from '../context/AppContext.jsx';
import { toast } from 'sonner';

declare global {
  interface Window {
    grecaptcha: any;
  }
}
const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepSignedIn: false
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null); // State for reCAPTCHA token
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null); // State for reCAPTCHA error
  const navigate = useNavigate();
  const captchaRef = useRef();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const err = params.get("err");

  useEffect(() => {
    if (err === "email_already_registered") {
      toast.error("This email is already registered. Please login with your password.");
    }
  }, [err]);

  const { setIsLoggedIn } = useContext<any>(AppContent);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    if (token) {
      setRecaptchaError(null); // Clear error if token is received
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA challenge.");
      toast.error(recaptchaError);
      return;
    }

    (captchaRef.current as ReCAPTCHA | null)?.reset();

    try{
      const res = await login(formData.email,  formData.password, recaptchaToken);
      if (res.data.success == true) {
        setIsLoggedIn(true); // Update context state
        toast.success(res.data.message);
        navigate('/home');
      } else {
        toast.error(res.data.message);
        navigate('/login');
      }
    }catch (error) {
      toast.error(error.message);
      navigate('/login');
    }

  };

  const handleGooleLogin = () => {
    window.location.href = `http://localhost:5000/api/user/auth/google`;
  };

  return (
    <div className="min-h-screen bg-[#fff] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex justify-center mb-6">
            <img src="/logo.png" alt="Bluestock logo" />
          </Link>
        </div>

        {/* Login Form */}
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 border-gray-200 focus:outline-[#000] focus:border-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700 transition-colors">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:outline-[#000] focus:border-none pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* reCAPTCHA Implementation */}
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
                className="w-full"
                ref={captchaRef}
              />

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="keepSignedIn" 
                  name="keepSignedIn"
                  checked={formData.keepSignedIn}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, keepSignedIn: checked as boolean }))
                  }
                  className="border-gray-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
                <Label htmlFor="keepSignedIn" className="text-sm text-gray-600 cursor-pointer">
                  Keep me signed in
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-[#685cff] text-white font-medium rounded-lg transition-all duration-200"
              >
                Login
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or sign in with</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full h-12 bg-grey border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={handleGooleLogin}
            > 
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>

            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Create an account
              </Link>
            </div>
          </CardContent>
      </div>
    </div>
  );
};

export default Login;
