import React, { Component } from "react";
import "../styles/Home.css"
import 'animate.css';
import firstVideo from '../assets/firstVideo.mp4';
import secondVideo from '../assets/runningwarriors.mp4';

const FIRST_PAGE = '5_SECONDS';
const SECOND_PAGE = '15_SECONDS';


const FirstComponent = () => {
  
  return (
    <div>
    <div className="front animate__animated animate__fadeIn">
      <video autoPlay="autoplay"  muted loop id="myVideo" >
        <source src={firstVideo}  type="video/mp4" />
      </video>
      
  
  
        <div className="overlay">
          <h1 className="title-one white font-medieval">INSIGNIA</h1>
          <h2 className="title-two white">THE MILITARY STRATEGY GAME THAT PAYS TO PLAY</h2>
        </div>
        
    </div>
      <div>
        <a href="https://getinsignia.gitbook.io/whitepaper/" target="_blank"  rel="noreferrer">
          <p className="font-meridian white enter rounded-pill mt-3 py-2 center">Whitepaper</p>
        </a>
      </div>
    </div>
  )
 
};

const SecondComponent = () => (
  <div>
      <div className="frame animate__animated animate__fadeIn second">
      <video autoPlay="autoplay"  muted loop id="myVideo" >
        <source src={secondVideo}  type="video/mp4" />
      </video>

      <div className="overlay">
        <p className="title-three white font-medieval">OWN, RENT, BORROW & LEND UNIQUE NFTs </p>
        <p className="title-two white">A new world of Play-To-Earn.</p>
      </div>
      
    
      </div>
      <div>
        <a href="https://getinsignia.gitbook.io/whitepaper/" target="_blank"  rel="noreferrer">
          <p className="font-meridian white enter rounded-pill mt-3 py-2 center">Whitepaper</p>
        </a>
      </div>
  </div>
  
  
);

class Home extends Component {

  state = {
    currentPage: FIRST_PAGE
  };

  componentDidUpdate() {
    const {currentPage} = this.state;
    const isFirst = currentPage === FIRST_PAGE;

    if (isFirst) {
      this._showSecondPageDelayed();
    } else {
      this._showFirstPageDelayed();
    }
  }

  componentDidMount() {
    this._showSecondPageDelayed();
  };

  _showSecondPageDelayed = () => setTimeout(() => {this.setState({currentPage: SECOND_PAGE})}, 10000);

  _showFirstPageDelayed = () => setTimeout(() => {this.setState({currentPage: FIRST_PAGE})}, 10000);

  render() {
    const {currentPage} = this.state;
    const isFirst = currentPage === FIRST_PAGE;
    const ComponentToRender =  isFirst ? FirstComponent : SecondComponent;

    return <ComponentToRender/>;
  }
}

export default Home;
