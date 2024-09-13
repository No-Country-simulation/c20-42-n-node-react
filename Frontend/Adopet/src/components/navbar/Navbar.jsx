import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar =()=>{
	const {currentUser, logout} = useContext(AuthContext);
	const user = JSON.parse(currentUser);
	const navigate = useNavigate();
	useEffect(()=>{
		if(!user){
			<div>Loadind ...</div>
		}
		console.log(user)
		
	},[user]);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	    	<a className="navbar-brand" href="/"><span className="flaticon-pawprint-1 mr-2"></span>Adopet</a>
	    	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" data-target="#ftco-nav" >
	        <ul className="navbar-nav ml-auto">
			<li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
			<li className="nav-item"><a href="/" className="nav-link">About</a></li>
			<li className="nav-item"><a href="/" className="nav-link">Contacto</a></li>
			{ user && <>	{user.role==='USER' ?(
					<>  
						<li className="nav-item"><a href="/mascotas" className="nav-link">Mascotas</a></li>
						<li className="nav-item" onClick={logout}><a href="/" className="nav-link">Logout</a></li>
						
					</>
				):
				(					
					user.role === 'ADMIN'?(<>
						<li className="nav-item"><a href="/centro-adopcion" className="nav-link">Centros de Adopcion</a></li>
						<li className="nav-item" onClick={logout}><a href="/" className="nav-link">Logout</a></li>
						</>
					):(
						<></>
					)							
				)
				}

				</>
			}
			{!user&&
				<li className="nav-item"><a href="/login" className="nav-link">Login</a></li>

			}
	        </ul>
	      </div>
	    </div>
	  </nav>
    )
}

export default Navbar;