import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';
import ProgressBar from './ProgressBar';
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
          <ProgressBar />
        </div>
        <div className='font-meridian near-wallet pt-5'>
        <h3>Create Game Asset</h3>
          <p>Select an asset category below and mint one or purchase one in the marketplace to start playing</p>
          <p className='gold'>Please refer to the "Getting Started" section to understand the type of asset you need to start playing</p>
         
        </div>



        <div className="border wallet-space py-5 mt-5 shadow-lg">
            <article className="px-2">
                        <h6 className="bold pb-3 action font-meridian">Select Game Asset</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
            </article>
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