import React, { Component } from 'react';
import './App.css';
import Loading from "../src/Components/Loading/Loading";
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Loading />
      </div>
     
      
    );
  }
}

export default App;
