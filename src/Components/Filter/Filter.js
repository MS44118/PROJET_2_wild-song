import React, { Component } from "react";
import { Select, Button, Modal } from "react-materialize";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
    };
  }

  //here we find the method to display the modal filter
  // showFilteredMenu = () => {
  //   this.setState({
  //     showFilter: !this.state.showFilter
  //   });
  // }

  render() {
    return (
      <div>
        <Button
          icon="filter_list"
          flat waves="light" //cache le button
          node="a" //to create/activate the href
          href="#modal-filter"
          floating //round button
          large //size
          className="modal-trigger transparent"  // MODIFIER AVEC LA VARIABLE CSS ---------------
          onClick={this.state.showFilter ? "filter_list" : "add"}
        >
        </Button>
        <Modal id="modal-filter" header="Activer/Désactiver Filtres">
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

export default Filter;