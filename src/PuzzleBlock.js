import React, { Component } from 'react';
import { MakePuzzleItems } from './MakePuzzleItems';

class PuzzleBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puzzleItems: MakePuzzleItems(this.props.quantity, this.props.onClick)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.quantity !== this.props.quantity) {
            this.setState({
                puzzleItems: MakePuzzleItems(nextProps.quantity, nextProps.onClick)
            });
        }
    }

    render() {
        return <section className="puzzleBlock">{this.state.puzzleItems}</section>;
    }
}

export default PuzzleBlock;
