import React from 'react';
import Nav from "./Nav";
import Copyright from './Copyright';

const GetToken = () => (
  <div>
      <div className='play'>
          <div>
          <Nav />
            <p>Get Insignia Token</p>
          </div>
        
      </div>
        <Copyright />
  </div>
);

export default GetToken;