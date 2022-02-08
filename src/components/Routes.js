import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Whitepaper from './Whitepaper';
import App from './App';
import Home from './Home';


const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={App} />
        <Route exact path="/Whitepaper" component={Whitepaper} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;