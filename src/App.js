import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
// import M from '../node_modules/materialize-css/dist/js/materialize.js';
import './App.css';
import Geolocation from './Components/Geolocation/Geolocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="./images/logo.png"></img>
        <Geolocation />
      </div>
    );
  }
}

export default App;
