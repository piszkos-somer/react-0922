import React from "react";


function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid"> 
          <div class= "row">
            <div class= "col-md-6">
              <a className="navbar-brand" href="/" role="button">Home</a>
              <a className="navbar-brand" href="/About" role="button">About</a>
              <a className="navbar-brand" href="/Services" role="button">Services</a>
              <a className="navbar-brand" href="/Contact" role="button">Contact</a>
            </div>
          </div>
          
        </div>
      </nav>
);
}

export default Navbar;