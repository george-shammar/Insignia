import React from 'react';
import { Link } from 'react-router-dom';
import Whitepaper from './Whitepaper';
// import logo from "../assets/logo.png";
import "../styles/Nav.css"

function Nav() {
    return (
      <div className="top-nav">
      <div className="d-flex justify-content-between align-text-center pt-2 px-4">
        <div className="azania d-flex">
          <Link to="/" className="pink">Insignia</Link>
          {/* <Link to="/" ><img alt="logo" src={logo} className="logo mx-2 my-2" /></Link> */}
        </div>
        <div className="d-flex align-items-center font-meridian">
          {/* <p> <Link to="/CreateItem" className="white">Create</Link></p>
          <p> <Link to="/MarketPLace" className="px-4 white">Market Place</Link></p>
          <p><Link to="/MyAssets" className="white">My Assets</Link></p>
          <p><Link to="/Dashboard" className="px-4 white">Dashboard</Link></p> */}
          <p> <Link to="/Whitepaper" className="white">Whitepaper</Link></p>
        <p className="px-3 border-0 rounded-pill p-2 wallet white">Connect Wallet</p>
        </div>
      </div><hr className="hr"/>
      </div>
    );
  }
  
  export default Nav;