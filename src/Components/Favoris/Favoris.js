import React, { useState, useContext } from "react";
import { Button, Modal } from "react-materialize";
import Event from "../Event/Event";
import { ResultStorage } from '../../App';

const Favori = () => {
  
  const [showFavori, setShowFavori] = useState(false);
  const [storage, setStorage] = useContext(ResultStorage);
  
  return (
    <div>
      <Button
        icon="star_border"
        flat waves="light" //cache le button
        href="#modal3"
        floating //round button
        large //size
        className="modal-trigger transparent"  // MODIFIER AVEC LA VARIABLE CSS ---------------
        onClick={showFavori ? "Favori_list" : "add"}
      >
      </Button>
      <Modal id="modal3" header="Evènements en favoris" >
        {storage ? storage.map((event, index) => ( // for each event in api, display the title, image, adresse ... 
          <Event
            key={index}
            title={event.title ? event.title : ''} // call api and test if object is present and post else display a string empty
            image={event.image ? event.image : ''}
            address1={event.address1 ? event.address1 : ''}
            address2={event.address2 ? event.address2 : ''}
            date={event.date ? event.date : ''}
            time={event.time ? event.time : ''}
            reserveLink={event.reserveLink ? event.reserveLink : ''}
            star={event.star}
            lat={event.lat ? event.lat : ''}
            lng={event.lng ? event.lng : ''}
            eventLat={event.eventLat ? event.eventLat : ''}
            eventLng={event.eventLng ? event.eventLng : ''}
            id={event.id}
          />
        )) : "Vous n'avez aucun évènement en favoris"}
      </Modal>
    </div>
  );
}

export default Favori;