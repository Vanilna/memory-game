import React from 'react';
import { Random } from './Random';
import Puzzle from './Puzzle';

export const MakePuzzleItems = (quantity, clickHandler, clicks) => {
    let puzzleItems = []; //an item with <Puzzle /> components with src and key props
    let randomSrc;
    const srcChecker = []; //for checking if all random src are unique

    //function for creating a Puzzle instance with random src and placing
    //it at a random position in puzzleItems array
    const createPuzzle = (currentSrc) => {
        //find random index
        let index = Random(0, quantity);

        //check if this index is occupied if no, create here a Puzzle instance
        if (puzzleItems[index] === undefined) {
            puzzleItems[index] = (
                <Puzzle src={currentSrc} key={index} onClick={clickHandler} index={index} />
            );
        }
        // if this index is occupied - create a new random index and try again
        else {
            createPuzzle(currentSrc);
        }
    }

    //every src should appear twice, so our src quantity = half of Puzzle quantity
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