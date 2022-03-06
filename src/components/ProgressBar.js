import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Play.css';

const ProgressBar = () => (
  <div>
    <div className='d-flex steps px-5 pt-5 font-meridian'>
        <Link to="/WalletSetup" className='child'>
          <div >
              
              <p className='step-figure one py-2 rounded'>1</p>
              {/* <p className='line mt-2'>----------------------------------</p> */}
              <p className='mt-3'>NEAR Wallet Set up</p>
          
          </div>
        </Link>
            

          
        <Link to="/GetToken" className='child'>
          <div>

              <p className='step-figure two py-2 rounded'>2</p>
              {/* <p className='line mt-2'>----------------------------------</p> */}
              <p className='mt-3'>Get Insignia Token</p>
            </div>
        </Link>
          

        <Link to="/CreateAsset" className='child'> <div>
              <p className='step-figure py-2 rounded'>3</p>
              {/* <p className='line mt-2'>----------------------------------</p> */}
              <p className='mt-3'>Creat Game Asset</p>
            </div>
        </Link>
            
        <Link to="/DownloadGame" className='child'> 
            <div>
              <p className='step-figure py-2 rounded'>4</p>
              <p className='mt-3'>Download & Play</p> 
            </div>
        </Link>
      </div>
  </div>
);

export default ProgressBar;