import React, { Component } from "react";
import "./style/Button.css";

class Level extends Component {
  render() {
    return (
      <div className="level">
        <button onClick={this.props.onClick} value="6">
          {this.props.name}
        </button>
        <button onClick={this.props.onClick} value="8">
          {this.props.name}
        </button>
        <button onClick={this.props.onClick} value="12">
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Level;
