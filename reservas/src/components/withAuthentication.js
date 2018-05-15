import React from 'react';
import { firebase } from '../firebase';
import AuthUserContext from './AuthUserContext';

const withAuthenticationWrapper = Component =>
  class withAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authUser: null };
    }

    // Suscription to the firebase authentication change event
    componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          this.setState({ authUser });
        } else {
          this.setState({ authUser: null });
        }
      });
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  };

export default withAuthenticationWrapper;
