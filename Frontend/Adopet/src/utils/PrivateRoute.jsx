import React, {  useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from '../context/AuthContext'

const PrivateRoute = ()=>{
    const {currentUser, loading} = useContext(AuthContext);
    
    if(loading){
        return <div>Loading...</div>
    }
    return (
        currentUser ? <Outlet/> : <Navigate to="/login"/>
    )
        
}

export default PrivateRoute;