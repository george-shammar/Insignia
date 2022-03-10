import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Marketplace from './Marketplace';
import Home from './Home';
import News from './News';
import WalletSetup from './WalletSetup';
import GetToken from './GetToken';
import CreateAsset from './CreateAsset';
import DownloadGame from './DownloadGame';

const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={App} />
        <Route exact path="/MarketPLace" component={Marketplace} />
        <Route exact path="/News" component={News} />
        ?
        <Route exact path="/WalletSetup" component={WalletSetup} />
        <Route exact path="/GetToken" component={GetToken} />
        <Route exact path="/CreateAsset" component={CreateAsset} />
        <Route exact path="/DownloadGame" component={DownloadGame} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;