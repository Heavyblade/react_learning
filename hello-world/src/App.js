import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function format_user(name) {
  return("Hola mundo: " + name);
}

function Welcome(cosa) {
  return(<h1> Es un elemento{cosa.name} {format_user('cristian')}</h1>);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>{format_user('cristian')}</h3>
          <br/>
          <br/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Welcome name='PaaSOS'/>
        </p>
      </div>
    );
  }
}

export default App;
