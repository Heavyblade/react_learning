import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route path={routes.HOME} component={() => <HomePage />} />
      <Route path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
    </div>
  </Router>
);

export default withAuthentication(App);
