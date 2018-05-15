import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) => (
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: null };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { email, password } = this.state;
    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ email: '', password: '', error: null }));
        history.push(routes.HOME);
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            className="form-control"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button disabled={isInvalid} type="submit" className="btn btn-primary">Sign In</button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
