import React from "react";
import { Modal, Button } from "react-materialize";

const Search = () => {
  return (
    <div>
      <Button
        icon="search"
        flat waves="light" //to hide the button raising
        node="a" //to activate the href
        href="#modal-search" // link to the ID
        floating //round button + icon color
        large //icon size
        className="modal-trigger transparent" // to trigger the Modal
      >
      </Button>
      <Modal id="modal-search" header="Moteur de Recherche">
        <p>Prochainement, vous trouverez ici la fonctionnalité RECHERCHE.</p>
        <p>par ville</p>
        <p>par artiste</p>
        <p>par date</p>
        <p>par prix</p>
        <p>par type (exemple: filtre ENFANTS) </p>
      </Modal>
    </div>
  );
}

export default Search;