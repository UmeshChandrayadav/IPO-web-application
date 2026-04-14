import React, { useState, useContext } from 'react'
import { sendResetPasswordLink} from '../api/Api.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader } from "@/components/ui/card";
import { AppContent } from '../context/AppContext.jsx';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };

  interface OnSubmitEmailEvent extends React.FormEvent<HTMLFormElement> {}

  interface SendResetPasswordOtpResponse {
    data: {
      sucess?: boolean;
      success?: boolean;
      message: string;
      token?: string;
      uid?: string;
    };
  }

  const onSubmitEmail = async (e: OnSubmitEmailEvent): Promise<void> => {
    try{
      e.preventDefault();
      const response: SendResetPasswordOtpResponse = await sendResetPasswordLink(email);
      response.data.sucess ? toast.success(response.data.message) && setEmail("") : toast.error(response.data.message) && setEmail("") ;
    }catch (err: any) {
      toast.error(err.message);
    }
  }

  return (
    <div className="min-h-screen bg-[#fff] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
          <div className="text-center mb-8">
              <Link to="/" className="inline-block mb-6">
                  <img src="/public/logo.png" alt="" />
              </Link>
          </div>
          <CardHeader className="text-center pb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
            <p className='text-lg text-grey-600'>Enter your email address to get the password reset link</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={onSubmitEmail} className="space-y-4">
              <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                  </Label>
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@bluestock.in"
                      value={email}
                      onChange={handleInputChange}
                      className="h-12 border-gray-200 focus:outline-[#000] focus:border-none"
                      required
                  />
              </div>
              <Button 
                  type="submit" 
                  className="w-full h-12 bg-[#685cff]  text-white font-medium rounded-lg hover:bg-[#685cff] transition-colors disabled:opacity-50"
              >
                Password Reset
              </Button>
              <div className='text-center text-sm text-gray-600 mt-4'>
                <Link to="/login">Back to Login</Link>
              </div>
            </form>
          </CardContent>
      </div>
    </div>
    
  )
}

export default ForgotPassword;
