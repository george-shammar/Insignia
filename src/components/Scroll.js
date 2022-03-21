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
                    <article className="px-2">
                        <i className="fas fa-door-open pink py-4 icon-size action"></i>
                        <h6 className="bold pb-3 action font-meridian">WALLET SETUP</h6>
                        <p>
                        Insignia lives on the NEAR protocol. NEAR Wallet is your ticket to our metaverse. For first time NEAR users, click "Get NEAR Wallet", otherwise, proceed to the next tab.
                        </p>
                    </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-shopping-cart py-4 icon-size action"></i>
                    <h6 className="bold pb-3 action font-meridian">GET TOKEN</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                <i class="fas fa-paint-brush pink py-4 icon-size action"></i>
                    <h6 className="bold pb-3 action font-meridian">CREATE GAME ASSET</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
                
                {/* <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-book-open py-4 icon-size action"></i>
                    <h6 cclassName="bold pb-3 action font-meridian">DOWNLOAD AND PLAY</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
               
                </article>
                </div> */}

                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-shopping-cart py-4 icon-size action"></i>
                    <h6 className="bold pb-3 action font-meridian">DOWNLOAD & PLAY</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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