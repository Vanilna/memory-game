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
      quantity: 6,
      currentScore: 0,
      topScore: 0,
      newGame: false,
      clickCounter: { clicks: 0, itemKey: "" }
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.newGame = this.newGame.bind(this);
    this.countPoints = this.countPoints.bind(this);
  }

  changeLevel(e) {
    this.setState({ quantity: parseInt(e.target.value, 10) });
  }

  newGame() {
    this.setState({
      topScore: 0,
      newGame: true
    });
  }

  countPoints(e) {
    console.log(1);
    if (this.clickCounter.clicks === 0) {
      this.setState({
        clickCounter: {
          clicks: this.clickCounter.clicks++,
          itemKey: e.target.key
        }
      });
    }
    console.log(e.target); /*else if (this.clickCounter.clicks === 1 && )*/
  }

  render() {
    return (
      <main>
        <h1>Find Matches</h1>
        <NewGame onClick={this.newGame} name="New Game" />
        <Level onClick={this.changeLevel} name="Level" />
        <PuzzleBlock
          quantity={this.state.quantity}
          newGame={this.newGame}
          onClick={this.countPoints}
        />
        <TopScore topScore={this.state.topScore} />
        <Score currentScore={this.state.currentScore} />
      </main>
    );
  }
}

export default App;
