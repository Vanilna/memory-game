import React, { Component } from "react";

class Level extends Component {
  render() {
    return (
      <div className="level">
        <button onClick={this.props.onClick} value="6">
          {this.props.name} 1
        </button>
        <button onClick={this.props.onClick} value="8">
          {this.props.name} 2
        </button>
        <button onClick={this.props.onClick} value="12">
          {this.props.name} 3
        </button>
      </div>
    );
  }
}

export default Level;
