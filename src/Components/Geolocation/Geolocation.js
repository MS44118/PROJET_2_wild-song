import React, { Component } from 'react';
import EventModal from '../EventModal/EventModal';
import './Geolocation.css';
import config from '../../config';

class Geolocation extends Component{
  constructor(){
    super();
    this.state = {
      songkick: null,
      contentModal: null,
    };
  }

  // componentDidMount s'effectue une seule fois au lancement du composant Geolocation (et pas qd click button)
  getLocation = () => { 
    navigator.geolocation.getCurrentPosition(
      (position) => { //return an object with latitude, longitude, and cie
        // IMPLEMENT THERE THE LOADING ANIMATION ------------------------
        fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${config}&location=geo:${position.coords.latitude},${position.coords.longitude}`)
        .then(data => data.json())
        .then((data) => { 
          this.setState({
            songkick: data.resultsPage.results,
            contentModal: <EventModal events={data.resultsPage.results.event} />,
          })
        })
      }
      ,
      (error) => {
        console.log(error); //return a value (1=permission denied, 2=position unavailable, 3=timeout)
      }
    );
  }

  render(){
    return (
      <div>
        <figure>
          <p>Pour te donner les événements qui vont se dérouler autour de toi, nous avons besoin de te géolocaliser.</p>
          <button className={`waves-effect waves-light btn-large ${this.state.contentModal ? 'none' : ''}`} onClick={this.getLocation}> Geolocalisez-moi </button>
          {this.state.contentModal}
          <p>nous allons te donner les evenements pour: </p>
          <p>{this.state.songkick ? this.state.songkick.event[0].location.city : " Non géolocalisé"} </p>
        </figure>
      </div>
    );
  }
}

export default Geolocation;

