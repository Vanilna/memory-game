import React, { Component } from 'react';
import Level from './Level';
import NewGame from './NewGame';
import Score from './Score';
import TopScore from './TopScore';
import PuzzleBlock from './PuzzleBlock';
import './style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 6,
      currentScore: 0,
      topScore: 0,
      newGame: false,
      clickedSrc: '',
      clickedIndex: '',
      clicks: 0
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.newGame = this.newGame.bind(this);
    this.countPoints = this.countPoints.bind(this);
  }

  changeLevel(e) {
    this.setState({ 
      quantity: parseInt(e.target.value, 10),
      currentScore: 0,
      clickedSrc: '',
      clickedIndex: '',
      clicks: 0
     });
  }

  newGame() {
    this.setState({
      topScore: 0,
      newGame: true
    });
  }

  countPoints(clickedSrc, clickedIndex) {

    //checking if it is a first click
    if (this.state.clicks === 0) {
      this.setState({
        clickedSrc: clickedSrc,
        clickedIndex: clickedIndex,
        clicks: this.state.clicks + 1
      });
    } else if (this.state.clickedSrc === clickedSrc
      && this.state.clickedIndex !== clickedIndex) {
      let points;
      switch (this.state.clicks) {
        case 1:
          points = 5;
          break;
        case 2:
          points = 3;
          break;
        default:
          points = 1;
          break;
      }
      this.setState({
        currentScore: this.state.currentScore + points,
        clickedSrc: '',
        clickedIndex: '',
        clicks: 0
      });
    } else {
      this.setState({
        clicks: this.state.clicks + 1
      });
    }
  }

  render() {
    return (
      <main>
        <h1 className='header'>Find Matches</h1>
        <NewGame onClick={this.newGame} name='New Game' />
        <Level onClick={this.changeLevel} name='Level' />
        <PuzzleBlock
          quantity={this.state.quantity}
          newGame={this.state.newGame}
          onClick={this.countPoints}
        />
        <TopScore topScore={this.state.topScore} />
        <Score currentScore={this.state.currentScore} />
      </main>
    );
  }
}

export default App;
