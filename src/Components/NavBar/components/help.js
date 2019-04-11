import React, { Component } from "react";
import { Icon} from "react-materialize";


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

          <Icon onClick ={this.handleShowModalHelpOnClick} >
            {this.state.showModalHelp ? "help" : "add"}
            {this.state.showModalHelp ? "yes" : "no"}
           
          </Icon>

        
      );
      
    }
  }
  
  export default Help;