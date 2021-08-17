import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';       //Start mit './...' gibt an, dass die Datei im gleichen Directory ist. 
import App from './containers/App.js';     //als Parent für alles, um die Liste dynamisch zu machen und nicht jeden einzelnen Komponent einzeln zu tippen
import {robots} from './robots.js';  //Defracturing --> hier könnten mehrere Elemente/ properties herausgezogen werden, deshalb mit Klammern
import reportWebVitals from './reportWebVitals';
import'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
