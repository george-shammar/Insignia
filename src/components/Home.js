import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../styles/Home.css"
import 'animate.css';

const FIRST_PAGE = '5_SECONDS';
const SECOND_PAGE = '15_SECONDS';

const FirstComponent = () => (
  <div>
  <div className="front animate__animated animate__fadeIn">
      {/* <div>
        <p className="title-one white font-medieval">First</p>
        <p className="title-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div> */}
      
  </div>
    {/* <div>
      <Link to="/Whitepaper"><p className="font-meridian white enter rounded-pill mt-3 py-2 center">Whitepaper</p></Link>
    </div> */}
  </div>
);

const SecondComponent = () => (
  <div>
      <div className="frame animate__animated animate__fadeIn second">
      <div>
        <p className="title-three white font-medieval">Second</p>
        <p className="title-two">A new world of Play-To-Earn.</p>
      </div>
      
    
      </div>
      <div>
    
        <Link to="/Whitepaper"><p className="font-meridian white enter rounded-pill mt-3 py-2 center">Whitepaper</p></Link>
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


// 6160fdd435e4c5d0758bb612a84b6a952e672ae5