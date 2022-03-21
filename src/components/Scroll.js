import React from 'react';
import topdark from '../assets/top_dark.png';
import bottomdark from '../assets/bottom_dark.png';
import { Link } from 'react-router-dom';
import '../styles/Scroll.css';

const Scroll = () => {
  return(
      <div>
             <img src={topdark} className="rough"/>
    <div className="scroll">
     
      <section>
            <h6 className="topic py-5 font-medieval">GETTING STARTED</h6>
            <p className='get-started font-roboto'>Click "Play Now" to follow the steps below and get started with Insignia</p>
            <div className="d-flex py-5 px-5 justify-content-between font-roboto">
            <div className="border rounded card-space shadow-lg">
                    <article className="px-2 pt-4">
                       
                        <h6 className="bold pb-3 action font-meridian">WALLET SETUP</h6>
                        <p>
                        Insignia lives on the NEAR protocol. NEAR Wallet is your ticket to our metaverse. For first time NEAR users, click "Get NEAR Wallet", otherwise, proceed to the next tab.
                        </p>
                    </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2 pt-4">
                    
                    <h6 className="bold pb-3 action font-meridian">GET TOKEN</h6>
                    <p>
                    Insignia Token is the native currency of our metaverse. Details about the tokenomics can be found in the Whitepaper. We are currently using NEAR as the means of exchange. Click "Fund Wallet" and visit any of the exchanges in the list to fund your wallet. To do anything with the NEAR Wallet, you will need at least 0.1 NEAR. However, on the testnet, NEAR wallet is pre-funded when you created an account.
                    </p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2 pt-4">
                
                    <h6 className="bold pb-3 action font-meridian">CREATE GAME ASSET</h6>
                    <p>
                    Each game asset is a unique NFT stored on IPFS. Each wallet can only have one Insignia NFT. Click "Connect Wallet" to link your NEAR Wallet. 
                    Click "Create Asset" to mint a unique NFT. An alternative is to purchase a Game Asset in the Marketplace.

                    </p>
                </article>
                </div>

                <div className="border rounded card-space shadow-lg">
                <article className="px-2 pt-4">
                    <h6 className="bold pb-3 action font-meridian">DOWNLOAD & PLAY</h6>
                    <p>
                    Currently, a very limited edition of the Free-To-Play model of the game is available on PC. Android and IOS release is coming soon.

                    </p>
                </article>
                </div>
            </div>
                <div>
                    <Link to="/WalletSetup" ><p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">Play Now</p></Link>
                </div>
            </section>
            

        </div>
        <img src={bottomdark} className="rough"/>
    </div>
  )

};

export default Scroll;