import React from "react";

const Answer = (props) => {
  var selected = props.selectedNumbers.map(n => <span onClick={ () => props.unSelectNumber(n) } key={`selected_${n}`}>{n}</span>);
  return (
    <div className="col-md-4">
      {selected}
    </div>
  );
}

export default Answer;
