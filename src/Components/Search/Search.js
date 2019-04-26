import React, { Component } from 'react';
import { Modal, Button } from "react-materialize";
import config from '../../config';
// import EventModal from '../EventModal/EventModal';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      event: null,
      artist: null,
      location: null,
      performance: null,
      result: null,
      userInput: ""
    }
  }
  //méthode afin que l'utilisateur puisse renseigner la recherche et useriput s'update à chaqque frappe de touche
  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  // évite de reloader la page et contrôle la casse du texte
  addEvent(event) {
    event.preventDefault();
  }
  //méthode de récupération fetch pour les concerts de l'API songkick, les concerts sont triés par nom d'artise, date, ville
  componentDidMount() {

    // fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&artist_name=${artist_name}`)
    this.setState({

    })
    // .then(result =>result.json())
    // .then(result => {
    // this.setState({
    //   event: resultsPage.results.event,
    //   artist: resultsPage.results.event.performance.artist,
    //   location: resultsPage.results.event.location
    // });
    //  })    
  }


  getSearchConcert = () => {

  }


  render() {
    let resultEventsApi = this.props.events;
    return (
      <div>
        {this.state.event}
        {this.state.artist}
        {this.state.location}
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
          <form>
            <input
              value={this.state.userInput}
              type="text"
              placeholder="Renseignez votre recherche"
              onChange={this.onChange.bind(this)}
            />
            <button onClick={this.addEvent.bind(this)}>Ajouter</button>
          </form>
          {/* <p>Prochainement, vous trouverez ici la fonctionnalité RECHERCHE.</p>
            <p>par ville</p>
            <p>par artiste</p>
            <p>par date</p>
            <p>par prix</p>
            <p>par type (exemple: filtre ENFANTS) </p> */}
        </Modal>
      </div>
    );
  }

}




export default Search;