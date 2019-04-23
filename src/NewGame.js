import React, { Component } from 'react';

class NewGame extends Component {
  render() {
    return (
      <button className='newGame' onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

export default NewGame;
