import "./App.css";
import React, { Component } from "react";
import { Personas } from "./Personas";
import Cockpit from "./Cockpit";

class App extends Component {
  state = {
    persons: [
      { name: "cristian", edad: 38 },
      { name: "Milena", edad: 37 },
      { name: "Santiago", edad: 9 },
    ],
    showCockPit: true
  };

  switchNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "cristian", edad: 40 },
        { name: event.target.value, edad: 37 },
        { name: "Santiago", edad: 9 },
      ],
    });
  };

  toggleCockPit = () => {
    this.setState({showCockPit: !this.state.showCockPit})
  }

  render() {
    return (
      <div className="App">
        <button  onClick={this.toggleCockPit}>Toogle Cockpit.</button>
        {this.state.showCockPit && <Cockpit />}
        <button onClick={this.switchNameHandler}>Presioname</button>
        <Personas
          gente={this.state.persons}
          onChange={this.switchNameHandler}
        />
      </div>
      //React.createElement('div',null, React.createElement('h1', null, 'Hola desde los elemento'))
    );
  }
}

export default App;
