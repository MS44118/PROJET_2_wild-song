import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import Event from "./Component/Event/Event";
// This component call the component Event for display as many times as there is a geolocate event
class EventModal extends Component {
  constructor(props) {
    super();
  }

  render() {
    let resultEventsApi = this.props.songkick;
    return (
      <Modal header="Evenement à proximité " trigger={<Button>Géolocalisez-moi</Button>}>
        {resultEventsApi.map((event) => {
          <Event
            title={resultEventsApi.performance[0].displayName}
            image={resultEventsApi.performance[0].artist.id}
            address1={resultEventsApi.venue.displayName}
            address2={resultEventsApi.location.city}
            date={resultEventsApi.start.date}
            time={resultEventsApi.start.time}
          />
        })};
      </Modal>
    );
  }
}

export default EventModal;