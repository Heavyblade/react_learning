import React from "react";

const Star = (props) => {
  var elements = [];

  for(var i=0; i < props.stars; i++) {
      elements.push(<i className="fa fa-star" key={i}/>);
  }
  return(
    <div className="col-md-5">
      {elements}
    </div>
  );
}

export default Star
