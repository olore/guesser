import React, { Component } from 'react';
// import './make-guess.css';

class MakeGuess extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <div>
          <label for="who">Your name</label>
          <input id="who" type="text"/>
        </div>
        <div>
          <label for="email">Your email</label>
          <input id="email" type="text"/>
          <p>* So mommy can contact you</p>
        </div>
        <div>
          <label for="comment">Comment</label>
          <textarea id="comment" type="text"
                    placeholder="Best of luck!"/>
        </div>      
      </div>      
    );
  }
}

export default MakeGuess;
