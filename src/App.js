import React, { Component } from "react";
import Level from "./Level";
import NewGame from "./NewGame";
import Score from "./Score";
import TopScore from "./TopScore";
import PuzzleBlock from "./PuzzleBlock";
import "./style/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPuzzles: 6,
      currentScore: 0,
      topScore: 0,
      newGame: false
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  changeLevel(e) {
    console.log(1);
    this.setState({ numberOfPuzzles: parseInt(e.target.value, 10) });
  }

  newGame() {
    console.log(1);
    this.setState({
      topScore: 0,
      newGame: true
    });
  }

  render() {
    return (
      <main>
        <h1>Find Matches</h1>
        <NewGame onClick={this.newGame} />
        <Level onClick={this.changeLevel} />
        <PuzzleBlock
          numberOfPuzzles={this.state.numberOfPuzzles}
          newGame={this.nwGame}
        />
        <TopScore topScore={this.state.topScore} />
        <Score currentScore={this.state.currentScore} />
      </main>
    );
  }
}

export default App;
