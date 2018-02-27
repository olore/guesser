import React, { Component } from 'react';
import './make-guess.css';

class MakeGuess extends Component {

  constructor() {
    super();
    this.state =  {
      hidden: true,
      guesser: '',
      length: '',
      weight: '',
      date: '',
      time: '',
      name: '',
      comment: ''
    }
  }

  toggle = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
      
    this.setState(state => ({[name] : value}));
  }

  handleSubmit = () => {
    console.log('hey');
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="make-guess">
        <a href="#show" onClick={this.toggle}>Make Guess</a>
        <div className={this.state.hidden ? 'hide' : 'show'}>
          <div>
            <div>
              <label htmlFor="guesser">Your name</label>
              <input name="guesser" type="text" value={this.state.guesser} onChange={this.handleChange} />

              <label htmlFor="length">Length</label>
              <input name="length" type="text" value={this.state.length} onChange={this.handleChange} />

              <label htmlFor="weight">Weight</label>
              <input name="weight" type="text" value={this.state.weight} onChange={this.handleChange} />

              <label htmlFor="date">Date</label>
              <input name="date" type="text" value={this.state.date} onChange={this.handleChange} />

              <label htmlFor="time">Time</label>
              <input name="time" type="text" value={this.state.time} onChange={this.handleChange} />

              <label htmlFor="name">Suggested Name(s)</label>
              <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />

              <label htmlFor="comment">Comment</label>
              <textarea name="comment" type="text"
                        placeholder="Best of luck!" value={this.state.comment} onChange={this.handleChange} />
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
