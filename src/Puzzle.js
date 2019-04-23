import React, { Component } from "react";

import puzzle1 from "./images/puzzle-1.jpg";
import puzzle2 from "./images/puzzle-2.jpg";
import puzzle3 from "./images/puzzle-3.jpg";
import puzzle4 from "./images/puzzle-4.jpg";
import puzzle5 from "./images/puzzle-5.jpg";
import puzzle6 from "./images/puzzle-6.jpg";
import puzzle7 from "./images/puzzle-7.jpg";
import puzzle8 from "./images/puzzle-8.jpg";
import puzzle9 from "./images/puzzle-9.jpg";
import puzzle10 from "./images/puzzle-10.jpg";
import puzzle11 from "./images/puzzle-11.jpg";
import puzzle12 from "./images/puzzle-12.jpg";
import puzzle13 from "./images/puzzle-13.jpg";
import coverBG from "./images/coverBG.jpg";

const images = [
  puzzle1,
  puzzle2,
  puzzle3,
  puzzle4,
  puzzle5,
  puzzle6,
  puzzle7,
  puzzle8,
  puzzle9,
  puzzle10,
  puzzle11,
  puzzle12,
  puzzle13
];

class Puzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    const currentSrc = images[this.props.src];
    let cardClass = "card";

    if (this.state.clicked) {
      cardClass += " isFlipped";
      setTimeout(this.handleClick, 1500);
    }

    return (
      <div className="scene">
        <div className={cardClass} onClick={this.handleClick}>
          <img
            className="card-side card-side-back"
            src={coverBG}
            alt="puzzle back"
          />
          <img
            className="card-side card-side-front"
            src={currentSrc}
            alt="puzzle"
          />
        </div>
      </div>
    );
  }
}

export default Puzzle;
