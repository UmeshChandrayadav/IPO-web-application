
import React, {useContext} from 'react';
import { Search, Bell } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {AppContent} from '../../context/AppContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/Api.jsx'

const Topbar = () => {
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
    <header className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Mobile trigger */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="lg:hidden" />
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>

        {/* Right side - User profile */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            { user && (
                <div className="flex items-center space-x-2">
                  {user.profilePicture ?  
                    <img src={user.profilePicture} alt="User Avatar" className="w-8 h-8 rounded-full" />
                  :
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 font-medium">{user.name ? user.name.charAt(0).toUpperCase() : 'U'}</span>
                    </div>
                  }
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {user.name}  
                  </span>
                </div>
              )}
            {isLoggedIn ? <>
                <Button className="bg-[#685cff]" onClick={userLogout}>
                  Logout
                </Button>
            </>: <></>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
