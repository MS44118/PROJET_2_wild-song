import React, { Component } from "react";
import { Icon } from "react-materialize";

class Favoris extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Icon >
        star
      </Icon>
    );
  }
}

export default Favoris;