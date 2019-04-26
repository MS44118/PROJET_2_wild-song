import React, { Component } from "react";
import { Modal, Button, Switch } from "react-materialize";
import './Help.css';
import B from '../../Images/BaptisteL.jpeg';
import C from '../../Images/CedricG.jpeg';
import M from '../../Images/MaelennS.jpeg';
import S from '../../Images/SamanthaB.jpg';
import T from '../../Images/TanguyJ.jpg';

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalHelp: false,
      pressed: true
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
      pressed: !this.setState.pressed
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

          {/* <div>
            <p className="help-title">options</p>
            <p>Mode nuit</p>
            <Switch offLabel="off" onLabel="On" onChange={this.state.pressed} />
            <p>Mode Gaucher</p>
            <Switch offLabel="off" onLabel="On" onChange={this.state.pressed} />
          </div> */}
          <div>
            <p className="help-title">Version</p>
            <version>V.0.2</version>
          </div>

          <div>
            <p className="help-title">Contributrices/eurs</p>
            <div class="row">
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src={B} alt="Baptiste L." />
                    <span class="card-title">Baptiste</span>
                  </div>
                  {/* <div class="card-content">
                    <p>Baptiste L.</p>
                  </div> */}
                  <div class="card-action">
                    <p><a href="https://github.com/blagisquet">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/baptiste-lagisquet-bb2a8937/">LinkedIn</a></p>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src={C} alt="Cedric G." />
                    <span class="card-title">Cédric</span>
                  </div>
                  {/* <div class="card-content">
                    <p>Cédric G.</p>
                  </div> */}
                  <div class="card-action">
                    <p><a href="https://github.com/cedricgdt">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/c%C3%A9dric-gardianot/">LinkedIn</a></p>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src={M} alt="Maelenn S." />
                    <span class="card-title">Maelenn</span>
                  </div>
                  {/* <div class="card-content">
                    <p>Maelenn S.</p>
                  </div> */}
                  <div class="card-action">
                    <p><a href="https://github.com/MS44118">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/maelenn-sallic/">LinkedIn</a></p>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src={S} alt="Samantha B." />
                    <span class="card-title">Samantha</span>
                  </div>
                  {/* <div class="card-content">
                    <p>Samantha B.</p>
                  </div> */}
                  <div class="card-action">
                    <p><a href="https://github.com/Besnard-Samantha">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/samantha-besnard/">LinkedIn</a></p>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src={T} alt="Tanguy J." />
                    <span class="card-title">Tanguy</span>
                  </div>
                  {/* <div class="card-content">
                    <p>Tanguy J.</p>
                  </div> */}
                  <div class="card-action">
                    <p><a href="https://github.com/tanguyJouvin">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/tanguy-j-081087167/">LinkedIn</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default Help;