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
            <h6 className="topic py-5 font-medieval">Getting Started</h6>
            <p className='get-started font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="d-flex py-5 px-5 justify-content-between font-roboto">
            <div className="border rounded card-space shadow-lg">
            <article className="px-2 card">
                        <i className="fas fa-door-open pink py-4 icon-size action"></i>
                        <h6 className="bold pb-3 action">WALLET SETUP</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                <i class="fas fa-paint-brush pink py-4 icon-size action"></i>
                    <h6 className="bold pb-3 action">CREATE GAME ASSET</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-shopping-cart pink py-4 icon-size action"></i>
                    <h6 className="bold pb-3 action">GET TOKEN</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-book-open pink py-4 icon-size action"></i>
                    <h6 cclassName="bold pb-3 action">DOWNLOAD AND PLAY</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
               
                </article>
                </div>
            </div>
                <div>
                    <Link to="/Play" ><p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">Play Now</p></Link>
                </div>
            </section>
            

        </div>
        <img src={bottomdark} className="rough"/>
    </div>
  )

};

export default Scroll;