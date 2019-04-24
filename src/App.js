import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Geolocation from './Components/Geolocation/Geolocation';
// eslint-disable-next-line
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import logo from './Images/LivinSoundTransp.png';
// import Loading from "../src/Components/Loading/Loading";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <img className="App-logo" src={logo} alt="logo LivinSound" />
        <Geolocation />
        {/* <Loading /> */}
      </div>
    );
  }
}

export default App;
