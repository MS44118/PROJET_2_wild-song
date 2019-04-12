import React, { Component } from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import NavBar from './Components/NavBar/NavBar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        < NavBar />
      </div>
    );
  }
}

export default App;
