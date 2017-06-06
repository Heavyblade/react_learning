import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

class Welcome extends React.Component {
  sayHello() { alert("hello"); }
  render() {
    return <h1 onClick={this.sayHello}>Hello, {this.props.name}</h1>;
  }
}

class FancyBorder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {props: props};
    }


    render() {
      return(
        <div class="bonito" id="FancyBorder">
          { this.state.props.children }
        </div>
      );
    }
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}


class App extends Component {
  render() {
    var name = "nea";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name="cristian"/>
        <Clock />
        <Greeting isLoggedIn={true} />
        <ul>{[<li>1</li>, <li>2</li>]}</ul>
        <FancyBorder >
          <h1>Estoy dentro de Fancy</h1>
        </FancyBorder>
      </div>
    );
  }
}

export default App;
