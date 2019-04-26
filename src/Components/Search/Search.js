import React, { Component } from 'react';
 import { Modal, Button } from "react-materialize";
 import config from '../../config';
// import EventModal from '../EventModal/EventModal';

class Search extends Component  {
  constructor(){
    super();
      this.state = {
       event : null,
       artist : null,
       location: null,
       performance: null,
       result: null,
       userInput:""
      }
    }
    //méthode afin que l'utilisateur puisse renseigner la recherche et userinput s'update à chaque frappe de touche
    onChange(event) {
      this.setState({
        userInput: event.target.value
      }, () => console.log(this.state.userInput) );
    }

    // évite de reloader la page et contrôle la casse du texte
    addEvent(event) {
      event.preventDefault();
    }
    
    
    //méthode de récupération fetch pour les concerts de l'API songkick, les concerts sont triés par nom d'artise, date, ville
    componentDidMount() {
    
      fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&event=${this.state.userInput}`)
      .then(result =>result.json())
      .then(result => {
        this.setState({
           event: result,
     })    
    });
  }

  
  
 
    render() {
       console.log(this.state.event)
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
            <form>
              <input
                value={this.state.userInput}
                type="text"
                placeholder="Renseignez votre recherche"
                onChange={this.onChange.bind(this)}
              />
              <button onClick={this.addEvent.bind(this)}>Ajouter</button>
            </form>
          </Modal>
        </div>
      ); 
    }

  }

  


export default Search;