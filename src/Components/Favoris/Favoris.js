import React, { Component } from "react";
import { Button, Modal } from "react-materialize";
import Event from "../Event/Event";

class Favori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavori: false,

    };
  }

  showFavoriMenu = () => {
    this.setState({
      showFavori: !this.state.showFavori
    });
  }

  render() {
    return (
      <div>
        <Button
          icon="star_border"
          flat waves="light" //cache le button
          node="a" //to create/activate the href
          href="#modal3"
          floating //round button
          large //size
          className="modal-trigger transparent"  // MODIFIER AVEC LA VARIABLE CSS ---------------
          onClick={this.state.showFavori ? "Favori_list" : "add"}
        >
        </Button>
        <Modal id="modal3" header="Evenements en favoris " >
          {JSON.parse(localStorage.getItem("favoris")) ? JSON.parse(localStorage.getItem("favoris")).map((event, index) => ( // for each event in api, display the title, image, adresse ... 
            <Event
              key={index}
              title={event.title ? event.title : ''} // call api and test if object is present and post else display a string empty
              image={event.image ? event.image : ''}
              address1={event.address1 ? event.address1 : ''}
              address2={event.address2 ? event.address2 : ''}
              date={event.date ? event.date : ''}
              time={event.time ? event.time : ''}
              reserveLink={event.reserveLink ? event.reserveLink: ''}
              star={event.star}

            />
          )) : "Favoris Vide"}
        </Modal>
      </div>
    );
  }
}

export default Favori;