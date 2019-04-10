import React, { Component } from 'react';
import './Geolocation.css'

class Geolocation extends Component{
  constructor(){
    super();
    this.state = {
      latUser: 0,
      lngUser: 0
    }
  };

  getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => { 
        //return an object with keys: latitude, longitude, altitude, accuracy(meters), altitude accuracy, heading(moving direction), speed)
        this.setState({
          latUser: position.coords.latitude,
          lngUser: position.coords.longitude,
        })
        console.log(this.state);
      },
      (error) => {
        //return a value (1=permission denied, 2=position unavailable, 3=timeout)
        console.log(error); 
      }
      // ,
      // (options) => { 
      //     enableHighAccuracy: true; //(boolean) true = high precision required to geolocate
      //     timeout: 5000;            // (milliseconds, integer) maximum time to receive geolocation
      //     maximumAge: 100000;        //(milliseconds, integer) how long do we keep the geolocation (dans le cache)
      // }
    );
  };

  render(){
    return (
      <div>
        <figure>
          <p>Pour te donner les événements qui vont se dérouller autour de toi, nous avons besoin de te geolocaliser.</p>
          <button 
            className="waves-effect waves-light btn-large"
            onClick={this.getGeolocation}
          >
            Geolocalisez-moi
          </button>
          <p>Nous t'avons trouver ici: {this.state.latUser}  {this.state.lngUser} </p>
        </figure>
      </div>
    )
  };

}

export default Geolocation;