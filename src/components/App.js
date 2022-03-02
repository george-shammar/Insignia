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
import Next from './Next';

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
        <Next />
        <Footer />
        <Copyright />
      </div>
      
    </div>
  );
}

export default App;