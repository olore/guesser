import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const GUESSES = [
    {key: 1, guesser: 'Uncle Buck', lenth: '21', weight: '8lbs 1oz', date: 'Mar 22', sex: 'M', time: '11:13', name: 'Bob or Harry', comments: 'Good luck!', guessedOn: 'Mar 10, 10:04'},
    {key: 2, name: 'Mary', dob: '$9.99', sex: 'F'},
    {key: 3, name: 'Kelly', dob: '$29.99', sex: 'F'},
    {key: 4, name: 'Alan', dob: '$99.99', sex: 'M'},
    {key: 5, name: 'Charlie', dob: '$399.99', sex: 'M'},
    {key: 6, name: 'Grace', dob: '$199.99', sex: 'F'}
  ];
   
ReactDOM.render(
    <App guesses={GUESSES} />, 
    document.getElementById('root'));

registerServiceWorker();