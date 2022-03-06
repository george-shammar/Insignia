import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Whitepaper from './Whitepaper';
import App from './App';
import Marketplace from './Marketplace';
import Home from './Home';
import News from './News';
import Play from './Play';
import WalletSetup from './WalletSetup';
import GetToken from './GetToken';


const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={App} />
        <Route exact path="/Whitepaper" component={Whitepaper} />
        <Route exact path="/MarketPLace" component={Marketplace} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Play" component={Play} />
        <Route exact path="/WalletSetup" component={WalletSetup} />
        <Route exact path="/GetToken" component={GetToken} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;