import React, { Component } from "react";
import "./style/Puzzle.css";
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

const images = [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5,
puzzle6, puzzle7, puzzle8, puzzle9, puzzle10, puzzle11, puzzle12, puzzle13]

class Puzzle extends Component {
  render() {
    return <img src={images[this.props.src]} alt="puzzle element" width="100px" />;
  }
}

export default Puzzle;