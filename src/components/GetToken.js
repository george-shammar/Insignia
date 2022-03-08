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
          {/* <ProgressBar /> */}






          <div className='d-flex steps px-5 pt-5 font-meridian'>
        <Link to="/WalletSetup" className='child'>
          <div >
              <p className='step-figure py-2 rounded'>1</p>
              
              <p className='mt-3'>NEAR Wallet Set up</p>
          
          </div>
        </Link>
            
        <p className='line'>__________</p>
          
        <Link to="/GetToken" className='child'>
          <div>

              <p className='step-figure hightlighted2 py-2 rounded'>2</p>
              <p className='mt-3'>Get Insignia Token</p>
            </div>
        </Link>
          
        <p className='line'>__________</p>

        <Link to="/CreateAsset" className='child'> <div>
              <p className='step-figure py-2 rounded'>3</p>
              <p className='mt-3'>Creat Game Asset</p>
            </div>
        </Link>

        <p className='line'>__________</p>

        <Link to="/DownloadGame" className='child'> 
            <div>
              <p className='step-figure py-2 rounded'>4</p>
              <p className='mt-3'>Download & Play</p> 
            </div>
        </Link>
      </div>












        </div>
        <div className='font-meridian near-wallet pt-5'>
        <h3>Get Insignia Token</h3>
          <p>Insignia Token is the native currency of our metaverse.</p>
          <p>Please skip this step if your NEAR wallet is funded.</p>
          <p className='gold'>We are currently using NEAR as the means of exchange.</p>
        </div>


        <div className="border wallet-space py-5 mt-5 shadow-lg">
            <article className="px-2">
                        <h6 className="bold pb-3 action font-meridian">Get some token</h6>
                        <p className="font-meridian mb-5 pb-5">
                          Visit any of the exchanges below to fund your wallet. To do anything with the NEAR Wallet, you will need at least 0.1 NEAR.
                        </p>
            </article>

            {/* <img src={near} className="near-logo"/> */}

            <div>
                    <a href="https://wallet.near.org/" target="_blank" className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2 px-5">Fund Wallet</a>
            </div>
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