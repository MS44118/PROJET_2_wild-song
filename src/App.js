import React, { Component } from 'react';
import './App.css';
import EventModal from "./Components/EventModal/EventModal";
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import M from '../node_modules/materialize-css/dist/js/materialize.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <EventModal />
      </div>
    );
  }
}

export default App;
