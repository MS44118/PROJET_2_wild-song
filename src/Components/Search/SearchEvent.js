import React, { Component } from 'react';
import { Modal, Button } from "react-materialize";
import config from '../../config';
// import EventModal from '../EventModal/EventModal';

class SearchEvent extends Component {
  constructor() {
    super();
    this.state = {
      // event: null,
      result: null,
      userInput: "",
      contentModal: null
    }
  }

  //méthode afin que l'utilisateur puisse renseigner la recherche et userinput s'update à chaque frappe de touche
  handleInput = (event) => {
    this.setState({ userInput: event.target.value })
  }

  // addEvent = (event) => {
  //   event.preventDefault();
  // }

  //méthode de récupération fetch pour les concerts de l'API songkick, les concerts sont triés par nom d'artise, date, ville
  searchArtist = () => {
    fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&artist_name=${this.state.userInput}`)
      .then(data => data.json())
      .then((data) => {
        this.setState({
          result: data.resultsPage.results,
          // contentModal: <EventModal events={data.resultsPage.results.event} location={position} />,
        })
        console.log(data);
      })
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
          </form>
          <button
            // className={`waves-effect waves-light btn-large ${this.state.contentModal ? 'none' : ''}`}
            className={`waves-effect waves-light btn-large `}
            onClick={this.searchArtist}
            > Rechercher {this.state.userInput}
          </button>

        <div>
          <p><a href="https://api.songkick.com/api/3.0/events.json?apikey=wg71XpcSqn6Fo8Dt&artist_name=muse"> muse </a></p>
          <p> userInput: {this.state.userInput} </p>
          <p> result: {this.state.result} </p>
        </div>

        </Modal>
      </div >
    );
  }
}

export default SearchEvent;