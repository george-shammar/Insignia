import React from 'react';
import topdark from '../assets/top_dark.png';
import bottomdark from '../assets/bottom_dark.png';
import '../styles/Scroll.css';

const Scroll = () => {
  return(
      <div>
             <img src={topdark} className="rough"/>
    <div className="scroll font-medieval">
     
      <section>
            <h6 className="topic py-5">Getting Started</h6>
            
            <div className="d-flex py-5 px-5 justify-content-between">
                <div className="border rounded card-space shadow-lg">
                    <article className="px-2">
                        <i className="fas fa-door-open pink py-4 icon-size "></i>
                        <h6 className="bold pb-3">Connect your wallet</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                <i class="fas fa-paint-brush pink py-4 icon-size"></i>
                    <h6 className="bold pb-3">Create a Digital Asset</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-shopping-cart pink py-4 icon-size"></i>
                    <h6 className="bold pb-3">Collectors</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-book-open pink py-4 icon-size"></i>
                    <h6 cclassName="bold pb-3">Resources</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
               
                </article>
                </div>
            </div>
                <div>
                    <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-3 py-2">Play Now</p>
                </div>
            </section>
            

        </div>
        <img src={bottomdark} className="rough"/>
    </div>
  )

};

export default Scroll;