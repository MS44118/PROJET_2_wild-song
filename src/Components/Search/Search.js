import React, { useState, useContext } from 'react';
import { Modal, Button } from "react-materialize";
import './Search.css';
import config from '../../config';
import Event from '../Event/Event';
import { ResultStorage } from '../../App';

const Search = () => {
  
  const [storage] = useContext(ResultStorage);
  const [events, setEvents] = useState(null);
  const [userInput, setUserInput] = useState("");

  //méthode afin que l'utilisateur puisse renseigner la recherche et userinput s'update à chaque frappe de touche
  const onChange = (event) => {
      setUserInput(event.target.value);
  }

  // évite de reloader la page et contrôle la casse du texte
  // const addEvent = (event) => {
  //   event.preventDefault();
  // }
  //méthode de récupération fetch pour les concerts de l'API songkick, les concerts sont triés par nom d'artise, date, ville
 const demandeApi = () => {
   fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&artist_name=${userInput}`)
    .then(result => result.json())
    .then(result => {
        setEvents(result.resultsPage.results.event);
    })
  }

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
          value={userInput}
          type="text"
          placeholder="Renseignez votre recherche"
          onChange={onChange}
        />
        <Button 
          onClick={demandeApi}
          href='#modalEventSearch' 
          className="modal-trigger transparent waves-effect waves-light buttonColor "
        >Recherche</ Button>
        {/* la moddal affiche les evenements rechercher en ce servant du modele visuel etablis dans le component Event */}
        <Modal id="modalEventSearch" header="Resultats de la recherche" actions={
          <Button waves="light" modal="close" flat>Fermer</Button>
        } >
          {events ? events.map((event, index) => {  // for each event in api, display the title, image, adresse ... 
            return <Event
              key={index}
              title={event.performance[0] ? event.performance[0].displayName : ''} // call api and test if object is present and post else display a string empty
              image={event.performance[0].artist.id ? event.performance[0].artist.id : ''}
              address1={event.venue ? event.venue.displayName : ''}
              address2={event.location ? event.location.city : ''}
              date={event.start.date ? event.start.date : ''}
              time={event.start.time ? event.start.time : ''}
              reserveLink={event.uri ? event.uri : ''}
              star={storage ? storage.findIndex((fav) => fav.id === event.id) >= 0 ? true : false : false}
              lat={event.location.lat ? event.location.lat : ''}
              lng={event.location.lng ? event.location.lng : ''}
            />
          }) : "Aucun resultat"}
        </Modal> 
      </Modal>
    </div>
  );
};

export default Search;