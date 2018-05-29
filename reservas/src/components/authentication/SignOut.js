import React from 'react';
import { auth } from '../../firebase';

const SignOut = ({ history }) => (
  <button className="btn btn-primary btn-small" onClick={auth.doSignOut}>
    SignOut
  </button>
);

export default SignOut;

