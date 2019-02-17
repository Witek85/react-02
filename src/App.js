import React, { Component } from 'react';
import { subscribeToTimer, subscribeToCounter } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => {
      return this.setState({ 
        timestamp: timestamp.time,
        message: timestamp.message
      })
    });
    
  }
  state = {
    timestamp: '',
    counter: 0,
    message: 'nothing yet'
  }
  onClickHandler = (currentValue) => {
    console.log('-----click----');
    subscribeToCounter((value => {
      console.log('returned', value)
      return this.setState({ counter: currentValue + value })
      // return this.setState((prevState) => ({ counter: prevState.counter + value}));
    }));
  }
  render() {
    return (
      <div>
        <p>{this.state.timestamp}</p>
        <p>{this.state.message}</p>
        <p><button onClick={() => this.onClickHandler(this.state.counter)}>click</button></p>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
