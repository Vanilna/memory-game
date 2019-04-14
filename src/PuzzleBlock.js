import React, { Component } from "react";
import { Puzzle } from "./Puzzle";

class PuzzleBlock extends Component {
  randomSrcGenerator() {
    let randomSrcArray = [];
    const maxPuzzle = this.props.numberOfPuzzles;
    let randomNumber;
    let randomPuzzleNumbers = [];
    randomSrcArray.length = maxPuzzle;

    const checkPuzzleNumbers = () =>
      randomPuzzleNumbers.findIndex(e => {
        return e === randomNumber;
      });

    const checkSrcArray = elem => {
      randomNumber = Math.floor(Math.random() * maxPuzzle);

      if (randomSrcArray[randomNumber] === undefined) {
        randomSrcArray[randomNumber] = [
          `./images/puzzle-${elem}.jpg`,
          randomNumber
        ];
      } else {
        checkSrcArray(elem);
      }
    };

    for (let i = 0; i < maxPuzzle / 2; i++) {
      randomNumber = Math.floor(Math.random() * (14 - 1) + 1);
      if (checkPuzzleNumbers() === -1) {
        randomPuzzleNumbers.push(randomNumber);
      } else {
        i--;
      }
    }

    randomPuzzleNumbers.forEach(elem => {
      checkSrcArray(elem);
      checkSrcArray(elem);
    });

    return randomSrcArray;
  }

  render() {
    const currentSrcArray = this.randomSrcGenerator();
    const puzzleItems = currentSrcArray.map(e => (
      <Puzzle src={e[0]} key={e[1]} />
    ));

    return <section>{puzzleItems}</section>;
  }
}

export default PuzzleBlock;
