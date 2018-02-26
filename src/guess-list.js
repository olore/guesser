import React, { Component } from 'react';
import './guess-list.css';

class GuessList extends Component {

  constructor(props) {
    super(props);
    this.guesses = props.guesses.map((g) => {
      return <tr className={g.sex}>
          <td>{g.guesser}</td>
          <td>{g.length}</td>
          <td>{g.weight}</td>
          <td>{g.date}</td>
          <td>{g.time}</td>
          <td>{g.name}</td>
          <td>{g.comments}</td>
          <td>{g.guessedOn}</td>
        </tr>;
    });
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <th>Guesser</th>
          <th>Length</th>
          <th>Weight</th>
          <th>DOB</th>
          <th>TOB</th>
          <th>Suggested Name</th>
          <th>Comments</th>
          <th>Guessed on</th>
        </thead>
        {this.guesses}
      </table>
    );
  }
}

export default GuessList;
