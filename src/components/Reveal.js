import player from "../assets/player.png";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/Insignia.json";
import Copyright from './Copyright';
import '../styles/Reveal.css';

const Reveal = () => {
    const [name, setName] = useState([])
    const [id, setID] = useState([])
    const [dna, setDNA] = useState([])
    const [rarity, setRarity] = useState([])
    const [level, setLevel] = useState([])

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
        let mage = data[data.length-1];
        const mageName = mage.name;
        const mageID = mage.id.toString();
        const mageDNA = mage.dna.toString();
        const mageRarity = mage.rarity.toString();
        const mageLevel = mage.level
        setName(mageName)
        setID(mageID)
        setDNA(mageDNA)
        setRarity(mageRarity)
        setLevel(mageLevel)
  
      }

    return (
        <div className="overall butt">
          
            <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
                <h1 className="font-meridian py-2">Insignia Asset</h1>
            </div>
            <div className="mint">
                <div className="border card mage-heigth rounded shadow-lg mt-3">
                    <img alt="logo" src={player} />
                </div>
                <div className="border">
                    <p className="white font-meridian">Name: {name}</p>
                    <div className="white mt-3">
                    <p className="font-meridian">ID: {id}</p>
                    <p className="font-meridian">DNA: {dna}</p>
                    <div className="font-meridian">
                        {rarity <= 80 ? (
                            <p>Rarity: Rare</p>
                        ) : (
                            <p>Rarity: Super Rare</p>
                        )}
                        
                    </div>
                    <p className="font-meridian">Level: {level}</p>
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
    )
}



export default Reveal;