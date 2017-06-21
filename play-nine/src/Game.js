import React from "react";
import Star from "./Star";
import Button from "./Button";
import Answer from "./Answer";
import Numbers from "./Numbers";
import _ from "lodash";

class Game extends React.Component {

  state = {
    selectedNumbers: [],
    stars: Game.randomNumber,
    isCorrect: null,
    usedNumbers: [],
    redraws: 5
  };

  static randomNumber = () => 1 + Math.floor(Math.random() * 9);

  selectNumber = (number) => {
    if (this.state.selectedNumbers.indexOf(number) > -1 || this.state.usedNumbers.indexOf(number) > -1) {
      return;
    }
    this.setState(prevState => ({selectedNumbers: prevState.selectedNumbers.concat(number), isCorrect: null}));
  };

  unSelectNumber = (number) => {
    this.setState(prevState => {
      var n_index = prevState.selectedNumbers.indexOf(number);
      n_index > -1 && prevState.selectedNumbers.splice(prevState.selectedNumbers.indexOf(number), 1);

      return ({selectedNumbers: prevState.selectedNumbers, isCorrect: null});

    });
  };

  checkAnswer = () => {
    this.setState(prevState => {
      prevState.isCorrect = _.sum(prevState.selectedNumbers) === prevState.stars;
      return (prevState);
    });
  };

  acceptAnswer = () => {
    this.setState(prevState => {
      return ({
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        isCorrect: null,
        stars: Game.randomNumber
      });
    });
  };

  redraw = () => {
    if (this.state.redraws < 1) {
      return;
    }

    this.setState(prevState => {
      return ({
        selectedNumbers: [],
        isCorrect: null,
        redraws: (prevState.redraws - 1),
        stars: Game.randomNumber
      });
    });
  };

  render() {
    const {selectedNumbers, stars, isCorrect, usedNumbers} = this.state
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Star stars={stars}/>
          <Button selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} isCorrect={isCorrect} acceptAnswer={this.acceptAnswer} redraw={this.redraw} redrawsLeft={this.state.redraws}/>
          <Answer selectedNumbers={selectedNumbers} unSelectNumber={this.unSelectNumber}/>
        </div>
        <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={usedNumbers}/>
      </div>
    );
  }

}

export default Game;
