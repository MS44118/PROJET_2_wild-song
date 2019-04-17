import React, { Component } from 'react';
import './Geolocation.css';
import config from '../../config';

class Geolocation extends Component{
  constructor(){
    super();
    this.state = {
      songkick: null,
      errorLog: null
    };
  }

  // componentDidMount s'effectue une seule fois au lancement du composant Geolocation (et pas qd click button)
  getLocation = () => { 
    navigator.geolocation.getCurrentPosition(
      (position) => { //return an object with latitude, longitude, & cie
        // IMPLEMENT THERE THE LOADING ANIMATION ------------------------
        fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&location=geo:${position.coords.latitude},${position.coords.longitude}`)
        .then(data => data.json())
        .then((data) => { 
          this.setState({ songkick: data.resultsPage.results, })
        })
      }
      ,
      (error) => { //return an object with message and code (1=permission denied, 2=position unavailable, 3=timeout)
        console.log(error);
        if(error.code === 1) {
          this.setState({ errorLog: "Permission refusée: vous pouvez supprimer le blocage dans les parametres de votre navigateur." }); 
        } else if (error.code === 2) {
          this.setState({ errorLog: "Geolocalisation non disponible. Vérifier si vous etes bien connectés à Internet" }); 
        } else if (error.code === 3) {
          this.setState({ errorLog: "la demande de geolocalisation a expiré" }); 
        }
      }
    );
  }

  render(){
    return (
      <div className="geoloc-display">
        <figure>
          <p>Pour rechercher les événements autour de toi, nous avons besoin de te géolocaliser.</p>
          <button 
            className="waves-effect waves-light btn-large buttonColor"
            onClick={this.getLocation}
          >
            Géolocalisez-moi
          </button>
          <p>{this.state.songkick 
            ? this.state.songkick.event[0].location.city 
            : this.state.errorLog} </p>
        </figure>
      </div>
    );
  }
}

export default Geolocation;

