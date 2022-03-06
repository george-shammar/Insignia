import React from 'react';
import Nav from './Nav';
import '../styles/Play.css';


const Play = () => (
  <div className="play">
    <Nav />
      <div className='d-flex steps px-5 pt-5'>

          <div className='child'>
            <p className='step-figure py-2 rounded center'>1</p>
            {/* <p className='line mt-2'>----------------------------------</p> */}
            <p>NEAR Wallet Set up</p>
          </div>
          

        
          <div className='child'>
            <p className='step-figure py-2 rounded center'>2</p>
            {/* <p className='line mt-2'>----------------------------------</p> */}
            <p>Get Insignia Token</p>
          </div>
        

          <div className='child'>
            <p className='step-figure py-2 rounded center'>3</p>
            {/* <p className='line mt-2'>----------------------------------</p> */}
            <p>Creat Game Asset</p>
          </div>
        
          
          <div className='child'>
            <p className='step-figure py-2 rounded center'>4</p>
            <p>Download & Play</p> 
          </div>
        
        
        
      </div>
     
  </div>
  
);

export default Play;