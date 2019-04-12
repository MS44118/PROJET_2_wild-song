import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import Geolocation from './Components/Geolocation/Geolocation';
//import EventModal from './Components/EventModal/EventModal'
import M from '../node_modules/materialize-css/dist/js/materialize.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Geolocation />
        {/* <EventModal /> */}
      </div>
    );
  };
};

export default App;
