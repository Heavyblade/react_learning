import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import SignOut from './authentication/SignOut';
import AuthUserContext from './authentication/AuthUserContext';

const NavigationLayout = props => (
  <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="https://demos.creative-tim.com/material-kit/index.html">Reservas</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse">
        { props.children }
      </div>
    </div>
  </nav>
);

const Loggeduser = () => (
  <NavigationLayout>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to={routes.HOME}>
          <i className="material-icons">home</i> Inicio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={routes.ACCOUNT}>
          <i className="material-icons">account_circle</i> Cuenta
        </Link>
      </li>
      <li className="nav-item"><SignOut /></li>
    </ul>
  </NavigationLayout>
);

const UnloggedUser = () => (
  <NavigationLayout>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to={routes.HOME}>
          <i className="material-icons">home</i> Inicio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={routes.SIGN_IN}>
          <i className="material-icons">send</i> Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={routes.SIGN_UP}>
          <i className="material-icons">how_to_reg</i> Registro
        </Link>
      </li>
    </ul>
  </NavigationLayout>
);

const Navigation = () => (
  <AuthUserContext.Consumer>
    { authUser => (authUser ? <Loggeduser /> : <UnloggedUser />) }
  </AuthUserContext.Consumer>
);

export default Navigation;
