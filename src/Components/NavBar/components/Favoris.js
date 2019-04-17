import React, { Component } from "react";
import { Select, Button, Modal } from "react-materialize";

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
        <Modal id="modal3" header="Bienvenue dans la recherche">
          <Select onChange={this.onChange}>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="1">
              Ville
            </option>
            <option value="2">
              Artiste
            </option>
            <option value="3">
              Salle de concert
            </option>
          </Select>
        </Modal>
      </div>
    );
  }
}

export default Favori;