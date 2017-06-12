import React from "react";
import Star from "./Star";
import Button from "./Button";
import Answer from "./Answer";
import Numbers from "./Numbers";

class Game extends React.Component {

  render() {
    return(
      <div className="container">
        <h3>Play Nine</h3>
        <hr/>
        <div className="row">
            <Star />
            <Button />
            <Answer />
        </div>
        <Numbers/>
      </div>
    );
  }

}

export default Game;
