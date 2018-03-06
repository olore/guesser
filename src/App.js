import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessList from './guess-list';
import MakeGuess from './make-guess';
import Intro from './intro';
import Guess from './guess';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      guesses: [
        new Guess({guesser: 'Uncle Buck', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'}),
        new Guess({guesser: 'Aunt Barb', length: '20', weight: '8lbs 10oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'}),
        // {key: 3, guesser: 'Billy', length: '22', weight: '7lbs 11oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        // {key: 4, guesser: 'Bobby', length: '20', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        // {key: 5, guesser: 'Karen', length: '20', weight: '8lbs 6oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        // {key: 6, guesser: 'Patrick', length: '20', weight: '7lbs 9oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        // {key: 7, guesser: 'Squidward', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        // {key: 8, guesser: 'Marsha', length: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
        // {key: 9, guesser: 'Jan', length: '19', weight: '8lbs 1oz', date: 'Mar 22', sex: 'F', time: '11:13', name: 'Bob or Harry', comment: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
      ],
      introData: {
        name: 'Pat & Cris',
        dueDate: '2018-02-23',
        comment: 'Thanks for playing!',
        password: 'passw0rd'
      }
    }
  }

  addGuess = (g) => {
    var newGuesses = this.state.guesses.concat(g);
    this.setState({
      guesses: newGuesses
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Baby Guesser</h1>
        </header>

        <Intro data={this.state.introData}></Intro>
        <MakeGuess addGuess={this.addGuess}></MakeGuess>
        <GuessList guesses={this.state.guesses}></GuessList>
      </div>
    );
  }
}

export default App;
