import React, { Component } from "react";
import { Modal,Button  } from "react-materialize";
import Event from "../Event/Event";

// This component call the component Event for display as many times as there is a geolocate event
class EventModal extends Component {
  constructor(props){
    super();
  };

  render(){
    let resultEventsApi = this.props.resultApi;
    return (
      <Modal header="Evenement à proximité" trigger={<Button>Evenement à proximiter</Button>} >
        {resultEventsApi.event.map((event, index) => {
          return <Event 
                    key={index}
                    title={event.performance[0] ? event.performance[0].displayName : "" }
                    image={event.performance[0] ? event.performance[0].artist.id : "" }
                    address1={event.venue ? event.venue.displayName : "" }
                    address2={event.location ? event.location.city : "" }
                    date={event.start ? event.start.date : "" }
                    time={event.start ? event.start.time : "" }
                />
        })}; 
      </Modal> 
    );
  };
};
export default EventModal;