import React from 'react';
import { Link } from 'react-router-dom';
import Whitepaper from './Whitepaper';
import logo from "../assets/Logo.png";
import "../styles/Nav.css"

function Nav() {
    return (
      
      <div className="top-nav d-flex align-text-center">
        <div className="flex1">
          <Link to="/" ><img alt="logo" src={logo} className="logo" /></Link>
        </div>
        <div className="d-flex align-items-center font-meridian flex2">
          <p> <Link to="/" className="px-4 white">Home</Link></p>
          <p><Link to="/Whitepaper" className="px-4 white">Whitepaper</Link></p>
          <p> <Link to="/MarketPLace" className="px-4 white">Market Place</Link></p>
          <p> <Link to="/News" className="px-4 white">News</Link></p>
        
        </div>
        <div className="flex1">
            <p className="wallet white font-meridian rounded-pill mt-3 py-2">Play Now</p>
        </div>
      </div>
      
    );
  }
  
  export default Nav;