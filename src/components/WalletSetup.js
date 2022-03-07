import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';
import forwardArrow from '../assets/right-arrows.png';
import backwardArrow from '../assets/left-arrow.png';
import near from '../assets/near-logo.png';
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
          <p className='gold'>Insignia lives on the NEAR protocol. NEAR Wallet is your ticket to our metaverse.</p>
        </div>



        <div className="border wallet-space py-5 mt-5 shadow-lg">
            <article className="px-2">
                        <h6 className="bold pb-3 action font-meridian">WALLET SETUP</h6>
                        <p className="font-meridian">
                          Feel free to skip this section if you already have a NEAR account. Otherwise, follow the simple instructions in the link below to get setup.
                        </p>
            </article>

            <img src={near} className="near-logo"/>

            <div>
                    <a href="https://wallet.near.org/" target="_blank" className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2 px-5">Get NEAR Wallet</a>
            </div>
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