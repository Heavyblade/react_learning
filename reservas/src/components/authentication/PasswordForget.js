import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class passwordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { email: '', history: props.history, error: null };
  }

  onSubmit(event) {
    const { email, history } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState({ email: '', error: null });
        history.push(routes.HOME);
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="email"
            className="form-control"
            placeholder="Email name"
          />
        </div>
        <br />
        <button disabled={isInvalid} className="btn btn-primary" type="submit">
          Send
        </button>
        <br />
        <Link to={routes.HOME}>Back to Home</Link>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(passwordForgetForm);

