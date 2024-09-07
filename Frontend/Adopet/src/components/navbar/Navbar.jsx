import React from "react";

const Navbar =()=>{

    return(
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	    	<a class="navbar-brand" href="index.html"><span class="flaticon-pawprint-1 mr-2"></span>Adopet</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="fa fa-bars"></span> Menu
	      </button>
	      <div class="collapse navbar-collapse" data-target="#ftco-nav" >
	        <ul class="navbar-nav ml-auto">
	        	<li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
	        	<li class="nav-item"><a href="#" class="nav-link">About</a></li>
	        	<li class="nav-item"><a href="#" class="nav-link">Veterinarian</a></li>
	        	<li class="nav-item"><a href="#" class="nav-link">Services</a></li>
	          <li class="nav-item"><a href="#" class="nav-link">Gallery</a></li>
	          <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
	          <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
	          <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    )
}

export default Navbar;