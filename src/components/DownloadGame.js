import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';
import forwardArrow from '../assets/right-arrows.png';
import backwardArrow from '../assets/left-arrow.png';

const DownloadGame = () => (
  <div>
      <div className='play'>
        <div>
          <Nav />
        </div>
        <div>
          <ProgressBar />
        </div>
        <div className='font-meridian near-wallet pt-5'>
        <h3>Download Insignia</h3>
          <p className='gold'>Select your preferred platform below.... Have Fun!!</p>
         
        </div>
        <div>
          <div className='d-flex'>
            <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">PC</p>
            <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">Android</p>
            <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">IOS</p>
          </div>
            
            <div className='d-flex'>
              <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">PS5</p>
              <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">Xbox</p>
              <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2"> Nintendo Switch</p>
             
            </div>
            
            
        </div>
        
          <div className='d-flex setup-navigation pt-5 mb-5'>
              <Link to="GetToken" className='font-meridian back'><p><img src={backwardArrow} className="arrow"/> Back</p></Link>
             <Link to="/" className='font-meridian back'><p>Next <img src={forwardArrow} className="arrow"/></p></Link> 
             
          </div>
         </div>

        <Copyright />
  </div>
);

export default DownloadGame;