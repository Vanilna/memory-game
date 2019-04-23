import React, { Component } from "react";
import Puzzle from "./Puzzle";
import { Random } from "./Random";

class PuzzleBlock extends Component {
    makePuzzleItems() {
        const puzzleItems = []; //an item with <Puzzle /> components with src and key props
        const quantity = this.props.quantity;
        let randomSrc;
        const srcChecker = []; //for checking if all random src are unique

        //function for creating random number in current range
        

        //function for creating a Puzzle instance wiht random src and plasing
        //it at a random positon in puzzleItems array
        const createPuzzle = (currentSrc) => {
            //find random index
            let index = Random(0, quantity);

            //check if this index is occupied if no, create here a Puzzle instanse
            if (puzzleItems[index] === undefined) {
                puzzleItems[index] = (
                    <Puzzle src={currentSrc} key={index} />
                );
            } 
            // if this index is occupied - create a new random index and try again
            else {
                createPuzzle(currentSrc);
            }
        }

        //every src should appear twice, so our src quantity = half of Puzle quantity
        for (let i = 0; i < quantity / 2; i++) { 
            randomSrc = Random(0, 13);

            //checking if this src was already used
            //if no - creating 2 instances of Puzzle with that src on a random positions
            if (srcChecker.indexOf(randomSrc) === -1) {
                srcChecker.push(randomSrc);

                createPuzzle(randomSrc);
                createPuzzle(randomSrc);
            } 
            //if this src was used, stop the loop from going to next step 
            //and choose other random src ard try again
            else {
                i--;
            }

        }

        return puzzleItems;
    }

    render() {
        const puzzleItems = this.makePuzzleItems();

        return (
            <section className="puzzleBlock">
                {puzzleItems}
            </section>
        );
    }
}

export default PuzzleBlock;
