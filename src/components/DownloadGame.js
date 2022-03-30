import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';
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
         

        <div className='d-flex steps px-5 pt-5 font-meridian'>
        <Link to="/WalletSetup" className='child'>
          <div >
              <p className='step-figure hightlighted py-2 rounded'>1</p>
              
              <p className='mt-3'>Wallet Set up</p>
          
          </div>
        </Link>
            
        <p className='line'>__________</p>
          
        <Link to="/GetToken" className='child'>
          <div>

              <p className='step-figure two py-2 rounded'>2</p>
              <p className='mt-3'>Get Insignia Token</p>
            </div>
        </Link>
          
        <p className='line'>__________</p>

        <Link to="/CreateAsset" className='child'> <div>
              <p className='step-figure py-2 rounded'>3</p>
              <p className='mt-3'>Create Game Asset</p>
            </div>
        </Link>

        <p className='line'>__________</p>

        <Link to="/DownloadGame" className='child'> 
            <div>
              <p className='step-figure highlighted4 py-2 rounded'>4</p>
              <p className='mt-3'>Download & Play</p> 
            </div>
        </Link>
      </div>










        </div>
        <div className='font-meridian near-wallet pt-5'>
        <h3>Get Insignia</h3>
          <p className='gold'>Select your preferred platform below.... Have Fun!!</p>
         
        </div>
        <div className='platform'>
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
              <Link to="GetToken" className='font-meridian back'><p><img src={backwardArrow} alt="" className="arrow"/> Back</p></Link>
             <Link to="/" className='font-meridian back'><p>Next <img src={forwardArrow} alt="" className="arrow"/></p></Link> 
             
          </div>
         </div>

        <Copyright />
  </div>
);

export default DownloadGame;