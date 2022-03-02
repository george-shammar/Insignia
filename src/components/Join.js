import React from 'react';
import '../styles/Join.css';
import join from '../assets/join.png';

const Join = () => {
  return(
    <div className="join">
      <h6 className="topic gold font-medieval py-5">Join Us</h6>
      <p className="white join-text font-meridian">Join the conversation on our social media channels.</p>
      <div className="join-social">
        <div className="d-flex fav-icons center">
          <p><a  href="#"><i className="fab fa-discord white"></i></a></p>
          <p><a href="#"><i className="fab fa-twitter white"></i></a></p>
          <p><a href="#"><i className="fab fa-telegram white"></i></a></p>
        </div>
        <img src={join} className="join-image"/>
      </div>
      
      
      

    </div>
  )

};

export default Join;