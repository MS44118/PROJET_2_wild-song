import React, { Component } from 'react';
import { Modal, Button } from "react-materialize";
import config from '../../config';
import EventModal from '../EventModal/EventModal';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      event: null,
      artist: null,
      location: null,
      performance: null,
      result: null,
      userInput: "",
      contentModal: null
    }
  }

  //méthode afin que l'utilisateur puisse renseigner la recherche et userinput s'update à chaque frappe de touche
  handleInput= (event) => {
    this.setState({ userInput: event.target.value })
  }

  // évite de reloader la page et contrôle la casse du texte
  // addEvent(event) {
  //   event.preventDefault();
  // }

  //méthode de récupération fetch pour les concerts de l'API songkick, les concerts sont triés par nom d'artise, date, ville
  searchArtist = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => { //return an object with latitude, longitude, & cie
        fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&artist_name=${this.state.userInput}`)
        .then(data => data.json())
        .then(data => {
          this.setState({
            contentModal: <EventModal events={data.resultsPage.results.event} location={position}  />,
          });
          console.log(data);
        });
      },
      (error) => { //return an object with message and code (1=permission denied, 2=position unavailable, 3=timeout)
        console.log(error);
      }
    )
  }

  render() {
    return (
      <div>
        {/* icon loupe to search modal */}
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

        {/* modal to enter text to search */}
        <Modal 
          id="modal-search" 
          header="Moteur de Recherche"
        >
          <form>
            <input
              value={this.state.userInput}
              type="text"
              placeholder="Renseignez votre recherche"
              onChange={this.handleInput}
            />
            <button onClick={this.searchArtist}>Trouver Artiste: {this.state.userInput}</button>
          </form>
        </Modal>
        {this.state.contentModal}

      </div>
    );
  }

}




export default Search;