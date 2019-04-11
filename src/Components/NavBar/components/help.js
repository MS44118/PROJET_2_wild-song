import React, { Component } from "react";
import { Icon, Modal, Button} from "react-materialize";





class Help extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        showModalHelp : false,
    };
  }
  

    handleShowModalHelpOnClick = () => {
        this.setState({
            showModalHelp: !this.state.showModalHelp
        });

    }
    

    render() {
      return (
      <div>
        <Button onClick ={this.handleShowModalHelpOnClick} href="#modal1" className="modal-trigger" >
          {this.state.showModalHelp ? "help" : "add"}
        </Button>

        <Icon href="#modal1" className="modal-trigger">
          help
        </Icon>
        <Modal id="modal1" header="Modal Header">
          Lorem ipsum dolor sit amet
        </Modal>


      </div>
        
        
      );
      
    }
  }
  
  export default Help;