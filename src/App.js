import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import Geolocation from './Components/Geolocation/Geolocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Geolocation />
      </div>
    );
  };
};

export default App;
