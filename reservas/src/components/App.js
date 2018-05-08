import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { firebase } from "../firebase";

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import * as routes from '../constants/routes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {authUser: null};
  }

  // Suscription to the firebase authentication change event
  componentDidMount() {
    firebase.auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      authUser
        ? this.setState({authUser})
        : this.setState({authUser: null});
    });
  }

  render() {
    return(
        <Router>
            <div>
                <Navigation authUser={this.state.authUser} />
                <hr/>
                <Route path={routes.HOME}    component={ () => <HomePage/> } />
                <Route path={routes.SIGN_UP} component={ () => <SignUpPage/> }  />
                <Route path={routes.SIGN_IN} component={ () => <SignInPage/> }  />
                <Route path={routes.PASSWORD_FORGET} component={ () => <PasswordForgetPage/> } />
                <Route path={routes.ACCOUNT} component={ () => <AccountPage/> } />
                <Route exact={true} path={routes.LANDING} component={ () => <LandingPage/> } />
            </div>
        </Router>
    );
  }

}

export default App;
