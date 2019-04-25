import React, { Component } from "react";
import { Modal, Button, Switch } from "react-materialize";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModalHelp : false,
      pressed : true
    };
  }
  //here we find the action to display the modal help
  handleShowModalHelpOnClick = () => {
    this.setState({
      showModalHelp: !this.state.showModalHelp
    });
  }
  //here we find the action on the toggle dark mode ( functionnality not developped actually)
  toggle = () => {
    this.setState({
     pressed : !this.setState.pressed
    });
   }
  render() {
    return (
      <div>
        <Button
         icon="help_outline"
         flat waves="light" //hidden action button
         node="a" //to create/activate the href
         href="#modal1"
         floating //round button
         large //size
         className="modal-trigger transparent"  // modify the css variable ---------------
         onClick={this.state.showModalHelp ? "help" : "add"}
        >
        </Button>
        <Modal id="modal1" header="Bienvenue dans l'aide">
          <p>Vous trouverez ici les informations d'aide pour utiliser de manière optimale l'application.</p>
          <p>contributrices/eurs</p>
          <div class="chip">
            <img src="./Images/BaptisteL.jpeg" alt="Contact Person"></img>
            Jane Doe
          </div>
          <img class="materialboxed" width="1 em" src="./Images/BaptisteL.jpeg" alt="BaptisteL"></img>
          <img class="materialboxed" width="1 em" src="./Images/MaelennS.jpeg" alt="MaelennS"></img>
          <img class="materialboxed" width="1 em" src="./Images/SamanthaB.jpeg" alt="SamanthaB"></img>
          <img class="materialboxed" width="1 em" src="./Images/CedricG.jpeg" alt="CedricG"></img>
          <img class="materialboxed" width="1 em" src="./Images/TanguyJ.jpeg" alt="TanguyJ"></img>
          <version>V.0.02</version>
          <p>Dark Mode</p>
          <Switch offLabel="off" onLabel="On" onChange={this.state.pressed}/>
        </Modal>
      </div>
      ); 
    }
  };
  
  export default Help;