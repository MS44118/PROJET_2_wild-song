import React, { Component } from 'react';
import EventModal from '../EventModal/EventModal';
import './Geolocation.css';
import config from '../../config';
import Loading from '../Loading/Loading';

class Geolocation extends Component {
  constructor() {
    super();
    this.state = {
      songkick: null,
      contentModal: null,
      errorLog: null,
      loading: false
    };
  }

  // componentDidMount s'effectue une seule fois au lancement du composant Geolocation 
  // (et pas quand on clique <button>)
  getLocation = () => {
    // this.setState({errorLog: null},() => {
    navigator.geolocation.getCurrentPosition(
      (position) => { //return an object with latitude, longitude, & cie
        this.setState({ loading: true }, () => {
          fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&location=geo:${position.coords.latitude},${position.coords.longitude}`)
            .then(data => data.json())
            .then((data) => {
              this.setState({
                songkick: data.resultsPage.results,
                contentModal: <EventModal events={data.resultsPage.results.event} location={position} />
              });
            })
            .then(() => {
              setTimeout(() => this.setState({ loading: false }), 3000);
            })
        })
      }
      ,
      (error) => { //return an object with message and code (1=permission denied, 2=position unavailable, 3=timeout)
        if (error.code === 1) {
          this.setState({ errorLog: "Permission refusée: vous pouvez supprimer le blocage dans les paramètres de votre navigateur." });
        } else if (error.code === 2) {
          this.setState({ errorLog: "Géolocalisation non disponible. Vérifiez si vous êtes bien connecté à Internet" });
        } else if (error.code === 3) {
          this.setState({ errorLog: "la demande de géolocalisation a expirée" });
        }
      }
    );
    // })
  }

  render() {
    return (
      <div className="geoloc-display">
        <figure>
          <p className="why-geoloc">Pour te donner les événements autour de toi, nous avons besoin de te géolocaliser.</p>
          <button
            className={`waves-effect waves-light btn-large ${this.state.contentModal ? 'none' : ''}`}
            onClick={this.getLocation}
          > Géolocalisez-moi
          </button>
          {/* display the button to open the Modal AFTER API fetch:  */}
          {this.state.contentModal}
          {/* display loading animation WHILE fetching API:  */}
          <p className="loading-animation">{this.state.loading ? <Loading /> : ""} </p>
        </figure>
        {/* display error message if problem with geoloc:  */}
        <p className="error-log"> {this.state.errorLog ? this.state.errorLog : ""} </p>
      </div>
    );
  }
}

export default Geolocation;

