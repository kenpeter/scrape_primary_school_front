import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './AppState';
import App from './App';
import './index.css';

// instance app state
const data = new AppState();

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
