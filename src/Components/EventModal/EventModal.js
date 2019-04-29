import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import Event from "../Event/Event";
import './EventModal.css'

// This component call the component Event for display as many times as there is a geolocate event
class EventModal extends Component {
  constructor() {
    super();
    this.state = {
      getCity: null,
    };
  };
  //fetch for get the city's location of the user
  componentDidMount = () => {
    fetch(`https://geo.api.gouv.fr/communes?lat=${this.props.location.coords.latitude}&lon=${this.props.location.coords.longitude}&fields=nom&format=json&geometry=centre`)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          getCity: res,
        })
      })
  }

  render() {
    let resultEventsApi = this.props.events;
    return (
      <Modal className="modalSize" trigger={<Button>Trouver les events</Button>}>
        <h2>Evenement a proximite de {this.state.getCity ? this.state.getCity[0].nom : ''}</h2>
        {resultEventsApi.filter((event) => (
          event.performance[0] ? event.performance[0].displayName : ''
        )).map((event, index) => (// for each event in api, display the title, image, adresse ... 
          <Event
            key={index}// call api and test if object is present and post else display a string empty
            lat={this.props.location.coords.latitude}
            lng={this.props.location.coords.longitude}
            // eventLat={event.venue.lat ? event.venue.lat : ''}
            // eventLng={event.venue.lng ? event.venue.lng : ''}
            title={event.performance[0] ? event.performance[0].displayName : ''}
            image={event.performance[0] ? event.performance[0].artist.id : ''}
            address1={event.venue ? event.venue.displayName : ''}
            address2={event.location ? event.location.city : ''}
            date={event.start ? event.start.date : ''}
            time={event.start ? event.start.time : ''}
            reserveLink={event.performance[0] ? event.performance[0].artist.uri : ''}
          // star={favorisArr.findIndex(star => star.event.performance[0].artist.uri=== favorisArr.reserveLink) ? true : false}
          />
        ))}
      </Modal>
    );
  }
};

export default EventModal;
