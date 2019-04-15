import React, { Component } from "react";
import Puzzle from "./Puzzle";

class PuzzleBlock extends Component {
    makePuzzleItems() {
        const puzzleItems = [];
        const quantity = this.props.quantity;
        puzzleItems.length = quantity;
        let src;
        const srcChecker = [];

        const randomNum = (min, max) => {
            return Math.floor(Math.random() * (max - min) + min);
        };

        const createPuzzle = (currentSrc) => {
            let index = randomNum(0, quantity);

            if (puzzleItems[index] === undefined) {
                puzzleItems[index] = (
                    <Puzzle src={currentSrc} key={index} />
                );
            } else {
                createPuzzle(currentSrc);
            }
        }

        for (let i = 0; i < quantity / 2; i++) {
            src = randomNum(0, 14);

            if (srcChecker.indexOf(src) === -1) {
                srcChecker.push(src);

                createPuzzle(src);
                createPuzzle(src);
            } else {
                i--;
            }
            
        }

        return puzzleItems;
    }

    render() {
        const puzzleItems = this.makePuzzleItems();

        return (
            <section>
                {puzzleItems}
            </section>
        );
    }
}

export default PuzzleBlock;
