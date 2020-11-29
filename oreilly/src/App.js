import logo from './logo.svg';
import './App.css';
import React, {Component} from  'react';
import Persona  from "./Persona/Persona"

class App extends Component {
  state = {
    persons: [
      {name: "cristian", edad: 38},
      {name: "Milena", edad: 37},
      {name: "Santiago", edad: 9}
    ]
  }

  render() {
    return (
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>Presioname</button>
        <Persona name={this.state.persons[0].name} edad={this.state.persons[0].edad}> Mi altura es 187 </Persona>
        <Persona name={this.state.persons[1].name} edad={this.state.persons[1].edad} />
        <Persona name={this.state.persons[2].name} edad={this.state.persons[2].edad} />

      </div>
      //React.createElement('div',null, React.createElement('h1', null, 'Hola desde los elemento'))
    );
  }
}

export default App;
