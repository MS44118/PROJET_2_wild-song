import React, { Component } from 'react';
import EventModal from '../EventModal/EventModal';
import './Geolocation.css';
import config from '../../config';
import Loading from "../Loading/Loading";

class Geolocation extends Component{
  constructor(){
    super();
    this.state = {
      songkick: null,
      contentModal: null,
      errorLog: null,
      loading: false,
    };
  }

  // componentDidMount s'effectue une seule fois au lancement du composant Geolocation 
  // (et pas quand on clique <button>)
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => { //return an object with latitude, longitude, & cie
        this.setState({loading: true},() => {
          fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&location=geo:${position.coords.latitude},${position.coords.longitude}`)
          .then(data => data.json())
          .then((data) => { 
            this.setState({
              songkick: data.resultsPage.results,
              contentModal: <EventModal events={data.resultsPage.results.event} />,
            })
          })
          .then( () => {
            setTimeout(()=> this.setState({loading:false}), 3000);
          })
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
        {/* display error message if problem with geoloc:  */}
        <p className="error-log"> {this.state.errorLog ? this.state.errorLog : "" } </p> 
        <figure>
          <p className="why-geoloc">Pour te donner les événements autour de toi, nous avons besoin de te géolocaliser.</p>
          <button 
            className={`waves-effect waves-light btn-large ${this.state.contentModal ? 'none' : ''}`} 
            onClick={this.getLocation}
          > Geolocalisez-moi 
          </button>
          {/* display the button to open the Modal AFTER API fetch:  */}
          {this.state.contentModal}
          {/* display city of the first event AFTER API fetch:  */}
          <p> {this.state.songkick ? this.state.songkick.event[0].location.city : "" } </p> 
          {/* display loading animation WHILE fetching API:  */}
          <p className="loading-animation">{this.state.loading ? <Loading /> : ""} </p>
        </figure>
      </div>
    );
  }
}

export default Geolocation;