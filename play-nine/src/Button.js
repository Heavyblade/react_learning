import React from "react";

const Button = (props) => {
  let button;

  switch (props.isCorrect) {
    case true:
      button =
        <button className="btn btn-success" onClick={props.acceptAnswer}>
          <i className="fa fa-check"/>
        </button>
      break;
    case false:
      button =
        <button className="btn btn-error">
          <i className="fa fa-times"/>
        </button>
      break;
    default:
       button = <button className="btn" disabled={props.selectedNumbers.length === 0} onClick={props.checkAnswer}>=</button>
  }

  return(
    <div className="col-md-2 text-center">
      { button }
      <br/>
      <br/>
      <button className={ `btn btn-warning btn-sm ${props.redrawsLeft == 0 ? 'disabled' : ''}`} onClick={props.redraw}>
        <i className="fa fa-refresh" />{props.redrawsLeft}
      </button>
    </div>
  );
}

export default Button;
