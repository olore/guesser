import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Guess from './guess';

class App extends Component {

  constructor(props) {
    super();
    this.Guesses = props.guesses.map((guess) =>
      <Guess guess={guess} key={guess.key}></Guess>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome back to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Guesses</h1>
        <div>
          {this.Guesses}
        </div>
      </div>
    );
  }
}

export default App;
