import React from 'react';
import header from '../assets/header-edit.png';
import '../styles/Scroll.css';

const Scroll = () => {
  return(
    <div className="scroll">
        <img src={header} className="rough"/>
      <section>
            <h6 className="topic font py-5">Getting Started</h6>
            <h6 className="d-flex justify-content-center">Follow the simple steps below to quickly get started with <p className="Azania pink px-2">Azania.</p></h6>
            <div className="d-flex py-5 px-5 justify-content-between">
                <div className="border rounded card-space shadow-lg">
                    <article className="px-2">
                        <i className="fas fa-door-open pink py-4 icon-size "></i>
                        <h6 className="bold pb-3">Connect your wallet</h6>
                        <p>Connecting to an Ethereum wallet is your first step towards selling and buying on Azania.
                            Click on the "Connect Wallet" button at the top-right corner of this page.
                            Follow the steps provided to set up your wallet if you do not have one. 
                            You can find resources below to help you get started with Ethereum wallets.
                        </p>
                    </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                <i class="fas fa-paint-brush pink py-4 icon-size"></i>
                    <h6 className="bold pb-3">Create a Digital Asset</h6>
                    <p>Fill in the relevant sections on the form to create a digital asset on the blockchain.
                        Specify the number of copies to be created (minted). 
                        Set the price you wish to receive for your asset.
                        All the assets you've created and currently in the market place could be seen on your dashboard by clicking the "Dashboard" link.</p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-shopping-cart pink py-4 icon-size"></i>
                    <h6 className="bold pb-3">Collectors</h6>
                    <p>
                        After connecting to an Ethereum wallet, collecting rare assets is simple as clicking the "Buy" button on the digital
                        asset you wish to acquire. Follow the prompts from youe wallet provider and pay the neccessary fees requested by the artist.
                        That's it!!! Go to "My Assets" to see your collections.
                    </p>
                </article>
                </div>
                <div className="border rounded card-space shadow-lg">
                <article className="px-2">
                    <i class="fas fa-book-open pink py-4 icon-size"></i>
                    <h6 cclassName="bold pb-3">Resources</h6>
                    <p>
                        To get the best out of Azania, we've included beginner-friendly resources on how to get started with the Blockchain, NFTs, Wallets e.t.c
                        A short video is included below to provide tour of the site. Feel free to reach out on the linked social media handles below.
                        You can also drop a message through the "Contact Us" form below.
                    </p>
               
                </article>
                </div>
            </div>
            </section>

    </div>
  )

};

export default Scroll;