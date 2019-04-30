
import React, { Component } from 'react';
import { Modal, Button } from "react-materialize";
import './Search.css';
import config from '../../config';
import Event from '../Event/Event';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      events: null,
      userInput: ""
    }
  };
  //méthode afin que l'utilisateur puisse renseigner la recherche et userinput s'update à chaque frappe de touche
  onChange = (event) => {
    this.setState({
      userInput: event.target.value
    }, () => console.log(this.state.userInput));
  }

  // évite de reloader la page et contrôle la casse du texte
  addEvent(event) {
    event.preventDefault();
  }

  //méthode de récupération fetch pour les concerts de l'API songkick, les concerts sont triés par nom d'artise, date, ville
 demandeApi = () => {
   fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&artist_name=${this.state.userInput}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
          events: result.resultsPage.results.event,
        }, () => console.log(this.state.events))  
      })
  }

  render() {
    return (
      <div>
        <Button
          icon="search"
          flat waves="light" //to hide the button raising
          href="#modal-search" // link to the ID
          floating //round button + icon color
          large //icon size
          className="modal-trigger transparent " // to trigger the Modal
        >
        </Button>
        {/* la modal affiche un champs de recherche et un bouton pour la recherche d'evenement par artiste */}
        <Modal id="modal-search" header="Moteur de Recherche">
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Renseignez votre recherche"
            onChange={this.onChange}
          />
          <Button 
            onClick={this.demandeApi}
            href='#modalEventSearch' 
            className="modal-trigger transparent waves-effect waves-light buttonColor "
          >Recherche</ Button>
          {/* la moddal affiche les evenements rechercher en ce servant du modele visuel etablis dans le component Event */}
          <Modal id="modalEventSearch" header="Resultats de la recherche" actions={
            <Button waves="light" modal="close" flat>Fermer</Button>
          } >
            {this.state.events ? this.state.events.map((event, index) => {  // for each event in api, display the title, image, adresse ... 
              return <Event
                key={index}
                title={event.displayName ? event.displayName : ''} // call api and test if object is present and post else display a string empty
                image={event.performance[0].artist.id ? event.performance[0].artist.id : ''}
                address1={event.location.city ? event.location.city : ''}
                date={event.start.date ? event.start.date : ''}
                time={event.start.time ? event.start.time : ''}
                reserveLink={event.uri ? event.uri : ''}
                star={event.star}
                lat={event.location.lat ? event.location.lat : ''}
                lng={event.location.lng ? event.location.lng : ''}
              />
            }) : "Aucun resultat"}
          </Modal> 
        </Modal>
      </div>
    );
  }

};

export default Search;