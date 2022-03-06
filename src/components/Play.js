import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import '../styles/Play.css';


const Play = () => (
  <div className="play">
    <Nav />
      <div className='d-flex steps px-5 pt-5'>

      <Link to="/WalletSetup"><div className='child'>
        
            <p className='step-figure py-2 rounded'>1</p>
            {/* <p className='line mt-2'>----------------------------------</p> */}
            <p className='mt-3'>NEAR Wallet Set up</p>
        
      </div>
      </Link>
          

        
      <Link to="/GetToken"><div className='child'>

            <p className='step-figure py-2 rounded'>2</p>
            {/* <p className='line mt-2'>----------------------------------</p> */}
            <p className='mt-3'>Get Insignia Token</p>
          </div>
      </Link>
        

          <div className='child'>
            <p className='step-figure py-2 rounded'>3</p>
            {/* <p className='line mt-2'>----------------------------------</p> */}
            <p className='mt-3'>Creat Game Asset</p>
          </div>
        
          
          <div className='child'>
            <p className='step-figure py-2 rounded'>4</p>
            <p className='mt-3'>Download & Play</p> 
          </div>
        
        
        
      </div>
     
  </div>
  
);

export default Play;