import React, { Component } from 'react';
import './guess.css';

class Guess extends Component {
  constructor(props) {
    super(props);
    this.guess = props.guess;
  }
  render() {
    return (
      <ul className="flex-container long-hand">
          <li className="flex-item">{this.guess.name}</li>
          <li className="flex-item">{this.guess.dob}</li>
          <li className="flex-item">{this.guess.sex}</li>
        </ul>
    );
  }
}

export default Guess;
