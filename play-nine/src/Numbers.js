import React from "react";
import _ from "lodash";

const Numbers = (props) => {
  var numbers = _.range(1, 10);

  const checkNumber = (number) => {

    if (props.usedNumbers.indexOf(number) > -1 ) {
       return "used";
    }

    if (props.selectedNumbers.indexOf(number) > -1) {
       return "selected";
    }

    return "";
  };

  return (
    <div className="card text-center">
      <div>
        {numbers.map((num, n) => {
          return (
            <span className={checkNumber(num)} key={"number_" + num} onClick={() => { props.selectNumber(num) } } >{num}</span>
          );
        })}
      </div>
    </div>
  );
};

export default Numbers;
