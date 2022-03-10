import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';
import { Link } from 'react-router-dom';
import forwardArrow from '../assets/right-arrows.png';
import backwardArrow from '../assets/left-arrow.png';

const CreateAsset = () => (
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
              <p className='step-figure hightlighted py-2 rounded'>1</p>
              
              <p className='mt-3'>NEAR Wallet Set up</p>
          
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
              <p className='step-figure highlighted3 py-2 rounded'>3</p>
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
        <h3>Create Game Asset</h3>
          <p>Select an asset category below and mint one or purchase one in the marketplace to start playing</p>
         
         
        </div>



        <div className="border wallet-space py-5 mt-5 shadow-lg">
            <article className="px-2">
                        <h6 className="bold pb-3 action font-meridian">Select Game Asset</h6>
                        <p className='gold'>Please refer to the "Getting Started" section to understand the type of asset you need to start playing</p>
            </article>


            <div>
                    <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">Creat Asset</p>
            </div>
        </div>


        


        <div>
                    <Link to="/Marketplace"><p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">Marketplace</p></Link>
        </div>
        
          <div className='d-flex setup-navigation pt-5 mb-5'>
              <Link to="GetToken" className='font-meridian back'><p><img src={backwardArrow} className="arrow"/> Back</p></Link>
             <Link to="/DownloadGame" className='font-meridian back'><p>Next <img src={forwardArrow} className="arrow"/></p></Link> 
             
          </div>
         </div>

        <Copyright />
  </div>
);

export default CreateAsset;