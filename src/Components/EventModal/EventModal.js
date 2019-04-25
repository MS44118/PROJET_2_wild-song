import React, { Component } from "react";
import { Modal,Button  } from "react-materialize";
import Event from "../Event/Event";

// This component call the component Event for display as many times as there is a geolocate event
class EventModal extends Component {
   render() {
    let resultEventsApi = this.props.events;

    return (
      <Modal header="Evenement à proximité " trigger={<Button>Trouver les events</Button>}>
        {resultEventsApi.map((event,index) => ( // for each event in api, display the title, image, adresse ... 
          <Event
            key={index}
            title={event.performance[0] ? event.performance[0].displayName : ''} // call api and test if object is present and post else display a string empty
            image={event.performance[0] ? event.performance[0].artist.id : ''}
            address1={event.venue ? event.venue.displayName : ''}
            address2={event.location ? event.location.city : ''}
            date={event.start ? event.start.date : ''}
            time={event.start ? event.start.time : ''}
            reserveLink={event.performance[0] ? event.performance[0].artist.uri : ''}
          />
        ))}
      </Modal>
    );
  }
}

export default EventModal;