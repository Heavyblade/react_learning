import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';

const App = () =>
    <Router>
        <div>
            <Navigation />
            <br/>
            <div id="wrapper">
                <Route extact path={routes.HOME}    component={ () => <HomePage/> } />
                <Route extact path={routes.LANDING} component={ () => <LandingPage/> } />
                <Route extact path={routes.SIGN_UP} component={ () => <SignUpPage/> }  />
                <Route extact path={routes.SIGN_IN} component={ () => <SignInPage/> }  />
                <Route extact path={routes.PASSWORD_FORGET} component={ () => <PasswordForgetPage/> } />
                <Route extact path={routes.ACCOUNT} component={ () => <AccountPage/> } />
            </div>
        </div>
    </Router>

export default App;