import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './authentication/SignUp';
import SignInPage from './authentication/SignIn';
import PasswordForgetPage from './authentication/PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import * as routes from '../constants/routes';
import withAuthentication from './authentication/withAuthentication';
import Modal from './Modal';
import Footer from './Footer';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <div
        className="page-header header-filter clear-filter"
        data-parallax="true"
        style={{ backgroundImage: "url('./assets/img/background.png')", height: '50vh' }}
      >
      </div>
      <div className="main main-raised">
        <div className="section section-basic" style={{ padding: "40px 0" }}>
          <div className="container">
            <Route path={routes.HOME} component={() => <HomePage />} />
            <Route path={routes.SIGN_UP} component={() => <SignUpPage />} />
            <Route path={routes.SIGN_IN} component={() => <SignInPage />} />
            <Route path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
            <Route path={routes.ACCOUNT} component={() => <AccountPage />} />
            <Route exact path={routes.LANDING} component={() => <LandingPage />} />
          </div>
        </div>
      </div>
      <Modal />
      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
