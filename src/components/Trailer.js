import React from 'react';
import footer from '../assets/footer-edit.png'
import '../styles/Trailer.css';

const Trailer = () => {
  return(
    <div>

  
    <div className="trailer">
      <h6 className="topic font-medieval py-5">Watch The Trailer</h6>
      <p className="gold font-roboto sub">Use a headset for maximum effect</p>
      
            <div className="px-3 video-responsive">
                {/* <iframe className="youtube" src="https://www.youtube.com/embed/gSLiX1QihEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
          
      
            
    </div>

    <img src={footer} alt="" className="rough"/>

    </div>
  )

};

export default Trailer;