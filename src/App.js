import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessList from './guess-list';
import MakeGuess from './make-guess';

class App extends Component {

  constructor() {
    super();

    this.GUESSES = [
        {guesser: 'Uncle Buck', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {guesser: 'Aunt Barb', length: '20', weight: '8lbs 10oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {guesser: 'Billy', length: '22', weight: '7lbs 11oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {guesser: 'Bobby', length: '20', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {guesser: 'Karen', length: '20', weight: '8lbs 6oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {guesser: 'Patrick', length: '20', weight: '7lbs 9oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {guesser: 'Squidward', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {guesser: 'Marsha', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {guesser: 'Jan', length: '19', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
      ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <MakeGuess></MakeGuess>

        <GuessList guesses={this.GUESSES}></GuessList>
      </div>
    );
  }
}

export default App;
