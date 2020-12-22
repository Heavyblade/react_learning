
import React from "react";

const Validation = (props) => {
  return(
    <p>Validation is: {props.count < 5 ? "To short" : "OK"}</p>
  )
}

export default Validation