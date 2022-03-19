import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import { initContract } from './utils';
import "./styles/index.css"

window.nearInitPromise = initContract()
  .then(() => {
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
})
.catch(console.error)
