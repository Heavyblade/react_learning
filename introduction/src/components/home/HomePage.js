import React from "react";
import {Link} from "react-router";


class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>PluralSight Administrator</h1>
        <p>React, Redux and Router for an ultra reponsive weba app </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
