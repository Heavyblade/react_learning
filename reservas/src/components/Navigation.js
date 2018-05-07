import React from 'react';
import { Link }from 'react-router-dom';
import * as routes from '../constants/routes';

const Navigation = () =>
    <header class="header clearfix">
        <nav>
            <ul className="nav nav-pills float-right">
                    <li className="nav-item"><Link className="nav-link" to={routes.SIGN_IN}>Sign In</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={routes.LANDING}>Landing</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={routes.HOME}>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={routes.SIGN_UP}>SignUp</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={routes.ACCOUNT}>Account</Link></li>
            </ul>
        </nav>
        <h3 class="text-muted">Reservas</h3>
    </header>

export default Navigation;