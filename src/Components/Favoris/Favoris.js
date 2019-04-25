import React, { Component } from "react";
import { Select, Button, Modal } from "react-materialize";

class Favori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavori: false,
      favArray : [],
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
        {/* <Modal header="Evenement en favoris " trigger={<Button>Trouver les events</Button>}>
          {localStorage.getItem("favoris").map((event) => ( // for each event in api, display the title, image, adresse ... 
            <Event
              title={event.performance[0] ? event.performance[0].displayName : ''} // call api and test if object is present and post else display a string empty
              image={event.performance[0] ? event.performance[0].artist.id : ''}
              address1={event.venue ? event.venue.displayName : ''}
              address2={event.location ? event.location.city : ''}
              date={event.start ? event.start.date : ''}
              time={event.start ? event.start.time : ''}
              reserveLink={event.performance[0] ? event.performance[0].artist.uri : ''}
            />
          ))}
        </Modal> */}
      </div>
    );
  }
}

export default Favori;