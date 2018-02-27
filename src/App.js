import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessList from './guess-list';
import MakeGuess from './make-guess';

class App extends Component {

  constructor() {
    super();

    this.GUESSES = [
        {key: 1, guesser: 'Uncle Buck', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {key: 2, guesser: 'Aunt Barb', length: '20', weight: '8lbs 10oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {key: 3, guesser: 'Billy', length: '22', weight: '7lbs 11oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {key: 4, guesser: 'Bobby', length: '20', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {key: 5, guesser: 'Karen', length: '20', weight: '8lbs 6oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {key: 6, guesser: 'Patrick', length: '20', weight: '7lbs 9oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {key: 7, guesser: 'Squidward', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {key: 8, guesser: 'Marsha', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        {key: 9, guesser: 'Jan', length: '19', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
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
