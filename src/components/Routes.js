import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Whitepaper from './Whitepaper';
import App from './App';
import Marketplace from './Marketplace';
import Home from './Home';


const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={App} />
        <Route exact path="/Whitepaper" component={Whitepaper} />
        <Route exact path="/MarketPLace" component={Marketplace} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;