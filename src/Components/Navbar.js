import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark"> 
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Car-Parking</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2 my-2 mr-auto">
        <Link to="/" style={{textDecoration:'none',color:'white'}}>LogOut</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}
