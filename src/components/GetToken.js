import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';
import forwardArrow from '../assets/right-arrows.png';
import backwardArrow from '../assets/left-arrow.png';
import '../styles/GetToken.css';

const GetToken = () => (
  <div>
       <div className='play'>
        <div>
          <Nav />
        </div>
        <div>
          <ProgressBar />
        </div>
        <div className='font-meridian near-wallet pt-5'>
        <h3>Get Insignia Token</h3>
          <p>Insignia Token is the native currency of our metaverse.</p>
          <p>Please skip this step....</p>
          <p className='gold'>We are currently using NEAR as the means of exchange.</p>
        </div>
        
          <div className='d-flex setup-navigation pt-5 mb-5'>
              <Link to="WalletSetup" className='font-meridian back'><p><img src={backwardArrow} className="arrow"/> Back</p></Link>
             <Link to="/CreateAsset" className='font-meridian back'><p>Next <img src={forwardArrow} className="arrow"/></p></Link> 
             
          </div>
         </div>
        
        <Copyright />
  </div>
);

export default GetToken;