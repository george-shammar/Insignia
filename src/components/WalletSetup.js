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



        <div className="border rounded card-space shadow-lg">
            <article className="px-2">
                        {/* <i className="fas fa-door-open pink py-4 icon-size action"></i> */}
                        <h6 className="bold pb-3 action font-meridian">WALLET SETUP</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
            </article>
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