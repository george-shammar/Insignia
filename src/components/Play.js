import React from 'react';
import Nav from './Nav';
import '../styles/Play.css';


const Play = () => (
  <div className="play">
    <Nav />
      <div className='d-flex steps pt-5'>

        <div className='child'>
          <p>1</p>
          <p>NEAR Wallet Set up</p>
        </div>
        
        <div>
          <p>2</p>
          <p>Get Insignia Token</p>
        </div>
        
        <div>
          <p>3</p>
          <p>Creat Game Asset</p>
        </div>
        
        <div>
          <p>4</p>
          <p>Download & Play</p>
        </div>
        
        
      </div>
     
  </div>
  
);

export default Play;