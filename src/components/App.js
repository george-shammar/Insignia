import React from 'react';
import Nav from "./Nav";
import Home from './Home';
import "../styles/App.css"
import Footer from "./Footer";
import Copyright from './Copyright';

function App() {
  return (
    <div >
      <div className="app">
        <Nav />
        <Home />
        <Footer />
        <Copyright />
      </div>
      
    </div>
  );
}

export default App;