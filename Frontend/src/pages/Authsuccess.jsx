// src/pages/AuthSuccess.js
import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContent } from '../context/AppContext.jsx'; // Import useAuth hook
import { toast } from 'sonner';

const AuthSuccess = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation
    const location = useLocation(); // Hook to access the current URL's location object
    const { setGoogleAuthUser } = useContext(AppContent); // Get the function to update user state after Google Auth

    useEffect(() => {
        // Parse URL query parameters
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token'); // Extract the 'token' parameter

        if (token) {
            setGoogleAuthUser({ token: token, /* other basic details if available from token */ });
            toast.success("Welcome Back!")
            navigate('/home');  
        } else {
            // If no token is found, something went wrong or it's an unexpected redirect
            toast.error("Login/Signup failed")
            navigate('/login'); // Redirect to login page
        }
    }, [location, navigate, setGoogleAuthUser]); // Dependencies for useEffect

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 text-center">
                <p className="text-xl font-semibold text-gray-700">Authenticating with Google...</p>
                <p className="text-md text-gray-500 mt-2">Please wait, you will be redirected shortly.</p>
                {/* A simple spinner or loading indicator */}
                <div className="mt-4 animate-spin rounded-full h-10 w-10 border-b-2 border-green-500 mx-auto"></div>
            </div>
        </div>
    );
};

export default AuthSuccess;
