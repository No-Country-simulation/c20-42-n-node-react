
import React, {useContext, useEffect, useState} from "react";

import authService from '../../service/authService'
import AuthContext from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = ()=>{

   const styleLogin = {
      width: '100%',
   }

   const [email, setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [redirect,setRedirect] = useState(false);
   const {currentUser} = useContext(AuthContext);
	const user = JSON.parse(currentUser);
	const navigate = useNavigate();

	
   const handleSubmit = (event)=>{
      event.preventDefault();
      setRedirect( authService.login({
         email:email,
         password:password
      }));
   }

   return(
        <>
        {
         redirect || user?
         <Navigate to="/"/>:

         <div className="main">
         <div className="container">
         <div className="d-flex justify-content-center align-items-center min-vh-100">
         
             <div className="card p-4 shadow" >
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                   <label  className="form-label">Email address</label>
                   <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                   <label  className="form-label">Password</label>
                   <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter password"/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
             </div>
          </div>
          
           </div>
         </div>
        }
        
        </>
    )
}

export default LoginPage;