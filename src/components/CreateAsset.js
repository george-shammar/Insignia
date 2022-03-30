import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import { NoWallet } from "./NoWallet";
import { NFTStorage, File } from 'nft.storage'
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/Insignia.json";
import Nav from "./Nav";
import Copyright from './Copyright';
import { Link } from 'react-router-dom';
import forwardArrow from '../assets/right-arrows.png';
import backwardArrow from '../assets/left-arrow.png';
require('dotenv').config();

const NFT_STORAGE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMyNTlEMWEzNTNEMzgyNjQ4MDVmNkY4Y2NjMTY0RThFODQzM0I0MDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzkzOTM1Njc5NywibmFtZSI6IkF6YW5pYSJ9.Tn3kou1OKA09gdsp0pduKzFUJGAVQ8KXk1-44pLWH9w";
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const CreateAsset = () => {
    const [walletAddress, setWallet] = useState("");
    const [formInput, updateFormInput] = useState({name:""});
    const [status, setStatus] = useState("");

  return(
                <div>
                    <div className='play'>
                      <div>
                        <Nav />
                      </div>
                      <div>
                        {/* <ProgressBar /> */}

                        <div className='d-flex steps px-5 pt-5 font-meridian'>
                      <Link to="/WalletSetup" className='child'>
                        <div >
                            <p className='step-figure hightlighted py-2 rounded'>1</p>
                            
                            <p className='mt-3'>Wallet Set up</p>
                        
                        </div>
                      </Link>
                          
                      <p className='line'>__________</p>
                        
                      <Link to="/GetToken" className='child'>
                        <div>

                            <p className='step-figure two py-2 rounded'>2</p>
                            <p className='mt-3'>Get Insignia Token</p>
                          </div>
                      </Link>
                        
                      <p className='line'>__________</p>

                      <Link to="/CreateAsset" className='child'> <div>
                            <p className='step-figure highlighted3 py-2 rounded'>3</p>
                            <p className='mt-3'>Create Game Asset</p>
                          </div>
                      </Link>

                      <p className='line'>__________</p>

                      <Link to="/DownloadGame" className='child'> 
                          <div>
                            <p className='step-figure py-2 rounded'>4</p>
                            <p className='mt-3'>Download & Play</p> 
                          </div>
                      </Link>
                    </div>












                      </div>
                      <div className='font-meridian near-wallet pt-5'>
                      <h3>Create Game Asset</h3>
                        <p>Select an asset category below and mint one or purchase one in the marketplace to start playing</p>
                      </div>



                      <div className="border wallet-space py-5 mt-5 shadow-lg">
                          <article className="px-2">
                                      <h6 className="bold pb-3 action font-meridian">Mint A Unique Character</h6>
                                      <p className='gold'></p>
                          </article>

                      </div>


                      


                      <div>
                          <Link to="/Marketplace"><p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">Marketplace</p></Link>
                      </div>
                      
                        <div className='d-flex setup-navigation pt-5 mb-5'>
                            <Link to="GetToken" className='font-meridian back'><p><img src={backwardArrow} alt="" className="arrow"/> Back</p></Link>
                          <Link to="/DownloadGame" className='font-meridian back'><p>Next <img src={forwardArrow} alt="" className="arrow"/></p></Link> 
                          
                        </div>
                      </div>

                      <Copyright />
                </div>
  )
};

export default CreateAsset;