import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rotas from './config/rotas/Routes'
import AppBar from './components/Appbar'

ReactDOM.render(
  <React.StrictMode>
    <AppBar />
    <Rotas />
  </React.StrictMode>,
  document.getElementById('root')
);
