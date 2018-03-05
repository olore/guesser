import React, { Component } from 'react';

class Intro extends Component {

  render() {
    return (
      <div className="intro">
        {this.props.data.name} is expecting a baby around {this.props.data.dueDate}!
        <br />
        {this.props.data.comment}
      </div>
    );
  }
}

export default Intro;
