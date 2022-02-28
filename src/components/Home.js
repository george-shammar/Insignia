import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import "../styles/Home.css"
import 'animate.css';

const FIRST_PAGE = '5_SECONDS';
const SECOND_PAGE = '15_SECONDS';

const FirstComponent = () => (
  <div className="front animate__animated animate__fadeIn">
      <div className="heading">
        <p className="white title-one"></p>
        <p className="white title-two"></p>
      </div>
      {/* <p><Link to="/Whitepaper" className="px-3 border-0 rounded-pill p-2 wallet white enter">Explore the Market Place</Link></p> */}
  </div>
);

const SecondComponent = () => (
  <div className="frame animate__animated animate__fadeIn second">
      <div className="heading">
        <p className="white title-three"></p>
        <p className="white title-two"></p>
      </div>
      {/* <p><Link to="/MarketPLace" className="px-3 border-0 rounded-pill p-2 wallet white enter">Explore the Market Place</Link></p> */}
    
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