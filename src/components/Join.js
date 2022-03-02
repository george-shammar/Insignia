import React from 'react';
import '../styles/Join.css';
import join from '../assets/join.png';

const Join = () => {
  return(
    <div className="join">
      <h6 className="topic gold font-medieval py-5">Join Us</h6>
      <img src={join} className="join-image"/>

    </div>
  )

};

export default Join;