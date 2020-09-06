import React, { Component } from 'react';
import './App.scss';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logics/calculate';

class App extends Component {

  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
