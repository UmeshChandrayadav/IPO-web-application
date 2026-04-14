import React, { useEffect, useState, useContext } from 'react'
import { createContext } from 'react'
import { getUserData, authState } from '../api/Api';
import { toast } from 'sonner'

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(false);

    //Getting User State wether user is logged in or not
    const getUserState = async () => {
        try{
            const res = await authState({withCredentials: true})
            if(res.data.success){
                setIsLoggedIn(true);
                setUser(res.data.user);
                getUserDetail();
            }
        }catch (err) {
            console.error(err.message)
        }

    }

    // Getting User Data from backend like name, email, verifyEmail or not, etc
    const getUserDetail = async () => {
        try{
            const response = await getUserData({withCredentials: true});
            response.data.success? setUser(response.data.userData): toast.error(response.data.message)
        }catch (err) {
            console.error(err.message)
        }
    }

    

    useEffect(() => {
        // Check user authentication state on component mount
        getUserState();
    }, []);

    const value = {isLoggedIn,setIsLoggedIn, user, 
        setGoogleAuthUser: async (userData) => {
        setIsLoggedIn(true);
        try {
            const response = await getUserData({ withCredentials: true });
            if (response.data.success) {
                setUser(response.data.userData);
            } else {
                setUser(false);
            }
        } catch (err) {
            setUser(false);
            console.error(err.message);
        }
    }
    };

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}