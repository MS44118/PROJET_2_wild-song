import React, { Component } from 'react';
import { Modal, Button } from "react-materialize";
import config from '../../config';
import EventModal from '../EventModal/EventModal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "", //    https://youtu.be/EWu9lWEpNRA
    }
  }

  handleUrl = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="App-header">
        <div>
          URL: <input value={this.state.value} onChange={this.handleUrl} />
        </div>
        <div>
          <button onClick={this.togglePlayer}>
            {this.state.play ? "Stop" : "Start"}
          </button>
          <button onClick={this.downVolume}>-</button>
          <button onClick={this.upVolume}>+</button>
          <p> {this.state.progress} / {this.state.duration} seconds</p>
        </div>
      </div>
    )
  }
}

export default App;
