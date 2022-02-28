import React from 'react';
import { Link } from 'react-router-dom';
import Whitepaper from './Whitepaper';
import logo from "../assets/Logo.png";
import "../styles/Nav.css"

function Nav() {
    return (
      
      <div className="top-nav d-flex justify-content-between align-text-center pt-2 px-4">
        <div className="flex1">
          <Link to="/" ><img alt="logo" src={logo} className="logo" /></Link>
        </div>
        <div className="d-flex align-items-center font-meridian flex2">
          {/* <p> <Link to="/CreateItem" className="white">Create</Link></p>
          <p> <Link to="/MarketPLace" className="px-4 white">Market Place</Link></p>
          <p><Link to="/MyAssets" className="white">My Assets</Link></p>
          <p><Link to="/Dashboard" className="px-4 white">Dashboard</Link></p> */}
          <p> <Link to="/" className="px-4 white">Home</Link></p>
          <p><Link to="/Whitepaper" className="px-4 white">Whitepaper</Link></p>
          <p> <Link to="/MarketPLace" className="px-4 white">Market Place</Link></p>
        
        </div>
        <div className="flex1">
            <p className="pt-4 wallet white font-meridian">Play Now</p>
        </div>
      </div>
      
    );
  }
  
  export default Nav;