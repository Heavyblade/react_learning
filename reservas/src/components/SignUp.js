import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import {auth} from  '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({history}) =>
    <div>
      <h1>Sign Up Page</h1>
      <SignUpForm history={history} />
    </div>

const INITIAL_STATE = {username: '', email: '', passwordOne: '', passwordTwo: '', error: null};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', email: '', passwordOne: '', passwordTwo: '', error: null};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
      const { username, email, passwordOne, passwordTwo, error } = this.state;
      const { history } = this.props;

      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState(() => ({username: '', email: '', passwordOne: '', passwordTwo: '', error: null}));
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });

        event.preventDefault();
  }

  render() {

    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' ||  username === '';

    return(
      <form onSubmit={this.onSubmit}>

          <div className="form-group">
              <label>Username</label>
              <input
              value={username}
              onChange={event => this.setState(byPropKey('username', event.target.value))}
              type="text"
              className="form-control"
              placeholder="User name"
              />
          </div>

          <div className="form-group">
              <label>Email</label>
              <input
                value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input
                value={passwordOne}
                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                type="password"
                className="form-control"
                placeholder="Password"
              />
          </div>

          <div className="form-group">
              <label>Confirm Password</label>
              <input
                value={passwordTwo}
                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
          </div>

          <button disabled={isInvalid} type="submit" className="btn btn-primary">Sign Up</button>
          { error && <p>{error.message}</p> }
      </form>
    );
  }

}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);
export {SignUpForm, SignUpLink};