import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';
import forwardArrow from '../assets/right-arrows.png';
import backwardArrow from '../assets/left-arrow.png';
import '../styles/WalletSetup.css';

const WalletSetup = () => (
  <div>
      <div className='play'>
        <div>
          <Nav />
        </div>
        <div>
          <ProgressBar />
        </div>
        <div className='font-meridian near-wallet pt-5'>
        <h3>Create your NEAR wallet</h3>
          <p>Insignia lives on the NEAR protocol. NEAR Wallet is your ticket to our metaverse.</p>
        </div>
        
          <div className='d-flex setup-navigation pt-5 mb-5'>
              <Link to="/" className='font-meridian back'><p><img src={backwardArrow} className="arrow"/> Back</p></Link>
             <Link to="/GetToken" className='font-meridian back'><p>Next <img src={forwardArrow} className="arrow"/></p></Link> 
             
          </div>
         </div>
        
          
            <Copyright />
          
            
        
     
  </div>
);

export default WalletSetup;