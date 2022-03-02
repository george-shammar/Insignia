import React from 'react';
import Nav from "./Nav";
import Home from './Home';
import "../styles/App.css"
import Footer from "./Footer";
import Copyright from './Copyright';
import Trailer from './Trailer';
import Scroll from './Scroll';
import Join from './Join';
import Event from './Event';
import Community from './Community';

function App() {
  return (
    <div >
      <div className="app">
        <Nav />
        <Home />
        <Trailer />
        <Join />
        <Scroll />
        <Event />
        <Community />
        {/* <Footer />
        <Copyright /> */}
      </div>
      
    </div>
  );
}

export default App;