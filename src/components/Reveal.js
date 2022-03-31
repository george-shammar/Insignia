import player from "../assets/player.png";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/Insignia.json";
import Copyright from './Copyright';
import Nav from "./Nav";
import '../styles/Reveal.css';

const Reveal = () => {  
    const [mages, setMages] = useState([]);

      useEffect(() => {
        loadNFTs()
      }, [])

      async function loadNFTs() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress.Insignia, MageArtifact.abi, signer);
        
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        const data = await contract.getOwnerGladiators(account);

        const mages = await Promise.all(data.map(async i => {
            let mage = {
                mageName : i.name,
                mageID : i.id.toString(),
                mageDNA : i.dna.toString(),
                mageRarity : i.rarity.toString(),
                mageLevel : i.level,
            }
    
            return mage;
        }));
        setMages(mages);
  
      }

    return (
        <div>
        <div className="play">
          <div>
          <Nav />
        </div>
            <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
                <h1 className="font-meridian py-2 center my-5">Insignia Asset</h1>
            </div>
            <div className="mint">
                <div className="border card mage-heigth rounded shadow-lg mt-3">
                    <img alt="logo" src={player} />
                </div>
                <div>
                    
                {
                mages.map((mage, i) => (
                <div className="border" key={mage.mageID}>
                    <p className="font-meridian">Name: {mage.mageName}</p>
                    <div className="mt-3">
                    <p className="font-meridian">ID: {mage.mageID}</p>
                    <p className="font-meridian">DNA: {mage.mageDNA}</p>
                    <div className="font-meridian">
                        {mage.mageRarity <= 80 ? (
                            <p>Rarity: Rare</p>
                        ) : (
                            <p>Rarity: Super Rare</p>
                        )}
                        
                    </div>
                    <p className="font-meridian">Level: {mage.mageLevel}</p>
                    </div>
                </div>
                ))
            }
            </div>
            </div>
            
        </div>
        <Copyright />
        </div>
    )
}



export default Reveal;