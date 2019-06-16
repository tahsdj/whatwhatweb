import React, { Component } from 'react';
import './App.css';
import Dinosaur from './dinosaur.png'

const App = () => (
  <div id="app">
    <header>
        什麼什麼工作坊
    </header>
    <div className="message">
      <img className="icon" src={Dinosaur}/>
      <h2>404 not found</h2>
    </div>
  </div>
)

export default App;
