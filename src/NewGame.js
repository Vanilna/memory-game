import React, { Component } from "react";
import "./style/Button.css";

class NewGame extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.name}</button>;
  }
}

export default NewGame;
