import React from 'react';
import AuthUserContext from './authentication/AuthUserContext';
import PasswordForgetForm from './authentication/PasswordForget';
import PasswordChangeForm from './authentication/PasswordChange';
import withAuthorization from './authentication/withAuthorization';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    { authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(AccountPage, condition);
