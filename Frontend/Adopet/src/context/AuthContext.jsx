import React, { createContext, useEffect, useState } from "react";

import authService from '../service/authService';

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const user = authService.getUserLogged();
        if(user){
            setCurrentUser(user);
        }
        setLoading(false);
    },[]);


    const login  = async(email, password)=>{
        const user  = await authService.login(email, password);
        setCurrentUser(user);
    }

    const logout = () =>{
        authService.logout();
        setCurrentUser(null);
    }

    return(
        <AuthContext.Provider value={{currentUser,login,logout,loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
