import React, { Component } from 'react';
import Guess from './guess';
import './make-guess.css';

class MakeGuess extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      hidden: true,
      guess: new Guess() // TODO - I want to pull this out of state
                         // but then i end up with read-only inputs
    }
  }

  toggle = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  // TODO: try using refs? https://reactjs.org/docs/refs-and-the-dom.html
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
      
    this.setState((state) =>  {
      var guess = state.guess;
      guess[name] = value;
      return { guess };
    });
  }

  handleSubmit = () => {
    // relay the new guess back up for display in GuessList
    this.props.addGuess(this.state.guess); 
  }

  render() {
    return (
      <div className="make-guess">
        <a href="#show" onClick={this.toggle}>Make Guess</a>
        <div className={this.state.hidden ? 'hide' : 'show'}>
          <div>
            <div>
              <label htmlFor="guesser">Your name</label>
              <input name="guesser" type="text" value={this.state.guess.guesser} onChange={this.handleChange} />

              <label htmlFor="sex">Sex</label>
              <input name="sex" type="text" value={this.state.guess.sex} onChange={this.handleChange} />

              <label htmlFor="length">Length</label>
              <input name="length" type="text" value={this.state.guess.length} onChange={this.handleChange} />

              <label htmlFor="weight">Weight</label>
              <input name="weight" type="text" value={this.state.guess.weight} onChange={this.handleChange} />

              <label htmlFor="date">Date</label>
              <input name="date" type="text" value={this.state.guess.date} onChange={this.handleChange} />

              <label htmlFor="time">Time</label>
              <input name="time" type="text" value={this.state.guess.time} onChange={this.handleChange} />

              <label htmlFor="name">Suggested Name(s)</label>
              <input name="name" type="text" value={this.state.guess.name} onChange={this.handleChange} />

              <label htmlFor="comment">Comment</label>
              <textarea name="comment" type="text"
                        placeholder="Best of luck!" value={this.state.guess.comment} onChange={this.handleChange} />
            </div>      
          </div>      
          <button className="btn btn-lg btn-primary"
            onClick={this.handleSubmit}
            >Punch it</button>
        </div>      
      </div>      
    );
  }
}

export default MakeGuess;
