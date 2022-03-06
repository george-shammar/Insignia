import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';
import ProgressBar from './ProgressBar';
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
        <div className='font-meridian'>
        <h3>Create your NEAR wallet</h3>
          <p>Insignia lives on the NEAR protocol. NEAR Wallet is your boarding pass to our metaverse.</p>
        </div>
        
        
         </div>
     <Copyright />
  </div>
);

export default WalletSetup;