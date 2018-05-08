import React from 'react';
import { Link }from 'react-router-dom';
import * as routes from '../constants/routes';
import SignOut from './SignOut';

const UnloggedUser = () =>
    <ul className="nav nav-pills float-right">
        <li className="nav-item"><Link className="nav-link" to={routes.HOME}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.LANDING}>Landing</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.SIGN_IN}>Sign In</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.SIGN_UP}>SignUp</Link></li>
    </ul>

const Loggeduser = () =>
    <ul className="nav nav-pills float-right">
        <li className="nav-item"><Link className="nav-link" to={routes.HOME}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.LANDING}>Landing</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.SIGN_IN}>Sign In</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.SIGN_UP}>SignUp</Link></li>
        <li className="nav-item"><Link className="nav-link" to={routes.ACCOUNT}>Account</Link></li>
        <li className="nav-item"><SignOut /></li>
    </ul>

const Navigation = (props) =>
      <header className="header clearfix">
          <nav>
            {props.authUser ? <Loggeduser/> : <UnloggedUser/> }
          </nav>
          <h3 className="text-muted">Reservas</h3>
      </header>

export default Navigation;
