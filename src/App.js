import React, { Component } from 'react';
import { subscribeToTimer, subscribeToCounter } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
    subscribeToCounter();
  }
  state = {
    timestamp: '',
    counter: 0,
    message: 'nothing yet'
  }
  onClickHandler = () => {
    alert('click');
  }
  render() {
    return (
      <div>
        <p>{this.state.timestamp}</p>
        <p>{this.state.message}</p>
        <p><button onClick={this.onClickHandler}>click</button></p>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
