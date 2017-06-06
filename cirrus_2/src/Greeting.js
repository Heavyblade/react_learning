import React, { Component } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
 );
}

class ButtonControl extends React.Component {
  constructor(props) {
    super(props);
    this.state      = {isLoggedIn: props.isLoggedIn};
    this.getLogOut  = this.getLogOut.bind(this);
    this.getLogedIn = this.getLogedIn.bind(this);
  }

  getLogOut() {
   this.setState({isLoggedIn: false});
  }

  getLogedIn() {
   this.setState({isLoggedIn: true});
  }

  render() {
      if (this.state.isLoggedIn) {
          return <LogoutButton onClick={this.getLogOut} />;
      } else {
          return <LoginButton onClick={this.getLogedIn} />;
      }
  }
}

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please login</h1>;
}

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
  }


  render() {
      var greet;

      if (this.isLoggedIn) {
        greet = <UserGreeting />;
      }
      greet = <GuestGreeting />;

    return <div>
              {greet}
              <ButtonControl isLoggedIn={true} />
           </div>
  }
}

export default Greeting;
