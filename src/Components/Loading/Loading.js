import React, { Component } from 'react';
import '../Loading/Loading.css';
import { Button, Row, Col, Container } from 'react-materialize';



class Loading extends Component {
 
  render() {
    return (
     <Container>
      <div id="preloader_1" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </Container>
    );
  }
}

export default Loading;