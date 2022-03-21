import React from 'react';
import discord from '../assets/discord-icon.png';
import twitter from '../assets/twitter.png';
import '../styles/Join.css';
import join from '../assets/join.png';

const Join = () => {
  return(
    <div className="join">
      <h6 className="white topic-join font-medieval py-5">Join Us</h6>
      <p className="white join-text font-meridian">Join the conversation on our social media channels.</p>
      
            <div className='soc d-flex'>
                <a href="https://discord.gg/A4xfZENW2Z" target="_blank"><img src={discord} className=' join-soc'/></a>
                <a href="https://twitter.com/Insignia_verse?s=03" target="_blank"><img src={twitter} className='join-soc'/></a>
            </div>
        <img src={join} className="join-image"/>
      
      
      
      

    </div>
  )

};

export default Join;