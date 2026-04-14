import axios from "axios";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../api/Api";
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader } from "@/components/ui/card";
import { toast } from 'sonner';


export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const token = searchParams.get("token");
  const uid = searchParams.get("uid");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      if (!token || !uid) {
        setMsg("Invalid token or ID");
        return;
      }
    const res = await resetPassword(newPassword, token, uid);
      if (res.data.success) {
        setMsg(res.data.message);
        toast.success(res.data.message);
        navigate("/login");
      }
    }catch (err: any) {
      toast.error(err.message);
      setMsg("An error occurred while resetting the password.");
    }
    
  };

  return (
    <div className="min-h-screen bg-[#fff] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
          <div className="text-center">
              <Link to="/" className="inline-block">
                  <img src="/logo.png" alt="Bluestock logo" />
              </Link>
          </div>
          <CardHeader className="text-center pb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
            <p className='text-lg text-grey-600'>Enter your email address to get the password reset link</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Password 
                </Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder=""
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  className="h-12 border-gray-200 focus:outline-[#000] focus:border-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder=""
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="h-12 border-gray-200 focus:outline-[#000] focus:border-none"
                  required
                />
                {(!newPassword && !confirmPassword) ? null
                : newPassword !== confirmPassword && confirmPassword ? (
                  <div className="text-red-500 text-sm mt-1">Passwords do not match</div>
                ) : <div className="text-green-500 text-sm mt-1">Passwords matched</div>}
              </div>
              <Button 
                type="submit" 
                disabled={!newPassword || !confirmPassword || newPassword !== confirmPassword}
                className={`w-full h-12 ${newPassword !== confirmPassword ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#685cff] text-white'} font-medium rounded-lg transition-all duration-200`}
                >
                Reset Password
              </Button>
              <div>{msg}</div>
            </form>
          </CardContent>
      </div>
    </div>
  );
};

export default ResetPassword;