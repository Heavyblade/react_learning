import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import SignOut from './SignOut';
import AuthUserContext from './AuthUserContext';

const Loggeduser = () => (
  <header className="header clearfix">
    <nav>
      <ul className="nav nav-pills float-right">
        <li className="nav-item"><Link className="nav-link" to={routes.HOME}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.LANDING}>Landing</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.SIGN_IN}>Sign In</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.SIGN_UP}>SignUp</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.ACCOUNT}>Account</Link></li>
        <li className="nav-item"><SignOut /></li>
      </ul>
    </nav>
    <h3 className="text-muted">Reservas</h3>
  </header>
);

const UnloggedUser = () => (
  <header className="header clearfix">
    <nav>
      <ul className="nav nav-pills float-right">
        <li className="nav-item"><Link className="nav-link" to={routes.HOME}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.LANDING}>Landing</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.SIGN_IN}>Sign In</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.SIGN_UP}>SignUp</Link></li>
      </ul>
    </nav>
    <h3 className="text-muted">Reservas</h3>
  </header>
);

const Navigation = () => (
  <AuthUserContext.Consumer>
    { authUser => (authUser ? <Loggeduser /> : <UnloggedUser />) }
  </AuthUserContext.Consumer>
);

export default Navigation;
