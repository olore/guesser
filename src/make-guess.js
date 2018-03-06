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

  getFormControl = (obj) => {
    const display = obj.display;
    const key = obj.key;
    return <div className="form-group row" key={key}>
      <label className="col-sm-4 col-form-label" htmlFor={key}>{display}</label>
      <div className="col-sm-6">
        <input name={key} className="form-control" type="text"
          value={this.state.guess[key]} 
          onChange={this.handleChange} />
      </div>
    </div>
  }

  generateLeftFormElements = () => {
    return [
      { display: 'Your name', key: 'guesser' },
      { display: 'Sex',       key: 'sex' },
      { display: 'Weight',    key: 'weight' },
      { display: 'Length',    key: 'length' }
    ].map((obj) => {
      return this.getFormControl(obj);
    })
  }

  generateRightFormElements = () => {
    return [
      { display: 'Date',            key: 'date' },
      { display: 'Time',            key: 'time' },
      { display: 'Suggested Name',  key: 'name' },
      { display: 'Comments',        key: 'comment' }
    ].map((obj) => {
      return this.getFormControl(obj);
    })
  }

  render() {
    return (
      <div className="makeGuess">
        <a href="#show" onClick={this.toggle}>Make Guess</a>
        <div className={this.state.hidden ? 'hide' : 'show'}>
          <div className="row">
            <div className="offset-sm-2 col-sm-4">
              <form>
                {this.generateLeftFormElements()}
              </form>
            </div>
            <div className="col-sm-4">
              <form>
                {this.generateRightFormElements()}
              </form>
            </div>      
          </div>      
          <div className="row align-items-center">
            <button className="mx-auto btn btn-lg btn-primary"
              onClick={this.handleSubmit}
              >Punch it</button>
        </div>      
      </div>      
      </div>      
    );
  }
}

export default MakeGuess;
