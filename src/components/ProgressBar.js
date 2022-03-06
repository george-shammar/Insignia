import React from 'react';

const ProgressBar = () => (
  <div>
        <Link to="/WalletSetup">
          <div className='child'>
              
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
          

        <Link to="/CreateAsset"> <div className='child'>
              <p className='step-figure py-2 rounded'>3</p>
              {/* <p className='line mt-2'>----------------------------------</p> */}
              <p className='mt-3'>Creat Game Asset</p>
            </div>
        </Link>
            
        <Link to="/DownloadGame"> <div className='child'>
              <p className='step-figure py-2 rounded'>4</p>
              <p className='mt-3'>Download & Play</p> 
            </div>
        </Link>
  </div>
);

export default ProgressBar;