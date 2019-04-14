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
      topScore: 0
    };
  }

  render() {
    return (
      <main>
        <h1>Find Matches</h1>
        <NewGame />
        <Level />
        <PuzzleBlock numberOfPuzzles={this.state.numberOfPuzzles} />
        <TopScore topScore={this.state.topScore} />
        <Score currentScore={this.state.currentScore} />
        <img src="./images/cover.jpg" alt="bla" />
      </main>
    );
  }
}

export default App;
