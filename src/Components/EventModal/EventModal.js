import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-materialize";
import Event from "../Event/Event";
import { ResultStorage } from '../../App';
import './EventModal.css';

// This component call the component Event for display as many times as there is a geolocate event
const EventModal = (props) => {
  
  const [storage, setStorage] = useContext(ResultStorage);
  const [getCity, setGetCity] = useState(null);
  //fetch for get the city's location of the user
  useEffect(() => {
    fetch(`https://geo.api.gouv.fr/communes?lat=${props.location.coords.latitude}&lon=${props.location.coords.longitude}&fields=nom&format=json&geometry=centre`)
    .then(res => res.json())
    .then((res) => {
      setGetCity(res);
    })
  }, [])

  let resultEventsApi = props.events;
  // let testFav = JSON.parse(localStorage.getItem("favoris")).findIndex((event) => event.reserveLink === event.performance[0] ? event.performance[0].artist.uri : '');
  return (
    <Modal className="modalSize" trigger={<Button className="waves-effect waves-light btn-large">Trouver les events</Button>}>
      <h2>Evenement a proximite de {getCity ? getCity[0].nom : ''}</h2>
      {resultEventsApi.filter((event) => (
        event.performance[0] ? event.performance[0].displayName : ''
      )).map((event, index) => (// for each event in api, display the title, image, adresse ... 
        <Event
          key={index}// call api and test if object is present and post else display a string empty
          lat={props.location.coords.latitude}
          lng={props.location.coords.longitude}
          eventLat={event.venue.lat ? event.venue.lat : ''}
          eventLng={event.venue.lng ? event.venue.lng : ''}
          title={event.performance[0] ? event.performance[0].displayName : ''}
          image={event.performance[0] ? event.performance[0].artist.id : ''}
          address1={event.venue ? event.venue.displayName : ''}
          address2={event.location ? event.location.city : ''}
          date={event.start ? event.start.date : ''}
          time={event.start ? event.start.time : ''}
          reserveLink={event.performance[0] ? event.performance[0].artist.uri : ''}
          id={event.id}
          star={storage ? storage.findIndex((fav) => fav.id === event.id) >= 0 ? true : false : false}
        />
      ))}
    </Modal>
  );
}

export default EventModal;
