import React, { useState, createContext } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Geolocation from './Components/Geolocation/Geolocation';
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import logo from './Images/logo.png';

export const ResultStorage = createContext([]);

function App() {
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('favoris')));
  return (
    <div className="App">
      <ResultStorage.Provider value={[storage, setStorage]}>
        <NavBar />
        <img className="App-logo" src={logo} alt="logo LivinSound" />
        <Geolocation />
      </ResultStorage.Provider>
    </div>
  );
}

export default App;