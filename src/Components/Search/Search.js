import React, { Component } from 'react';
 import { Modal, Button } from "react-materialize";
 import config from '../../config';
// import EventModal from '../EventModal/EventModal';

class Search extends Component  {
  constructor(){
    super();

    }
  

//méthode de récupération fetch pour les concerts de l'API songkick, les concerts sont triés par nom d'artise, date, ville
  getSearchConcert = () => {
    fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&artist_name=patrick+bruel&location=geo:47.2172500,-1.5533600`)
    .then(result =>result.json())
    .then(result => {console.log(result.resultsPage.results.event[0].displayName)})    
  }
 
    render() {
      
      return (
        <div>
          
          <Button
            icon="search"
            flat waves="light" //to hide the button raising
            node="a" //to activate the href
            href="#modal-search" // link to the ID
            floating //round button + icon color
            large //icon size
            className="modal-trigger transparent" // to trigger the Modal
          >
          </Button>
          <Modal id="modal-search" header="Moteur de Recherche">
            <p>Prochainement, vous trouverez ici la fonctionnalité RECHERCHE.</p>
            <p>par ville</p>
            <p>par artiste</p>
            <p>par date</p>
            <p>par prix</p>
            <p>par type (exemple: filtre ENFANTS) </p>
          </Modal>
        </div>
      ); 
    }

  }

  


export default Search;