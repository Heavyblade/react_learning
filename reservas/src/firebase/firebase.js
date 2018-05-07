import * as firebase from 'firebase';

// Initialize Firebase
if ( process.env.NODE_ENV === "dev" ) {

  var config = {
      apiKey: "AIzaSyBbvewvuE5zhCIwmA6s4_6sz3xwWocR4kU",
      authDomain: "reservas-zona.firebaseapp.com",
      databaseURL: "https://reservas-zona.firebaseio.com",
      projectId: "reservas-zona",
      storageBucket: "reservas-zona.appspot.com",
      messagingSenderId: "433144229144"
  };

} else {
    var config = {
        apiKey: "AIzaSyC7HrP2D3dPePY49KdbX6OZWz1MdhUVU4I",
        authDomain: "reservas-prod.firebaseapp.com",
        databaseURL: "https://reservas-prod.firebaseio.com",
        projectId: "reservas-prod",
        storageBucket: "reservas-prod.appspot.com",
        messagingSenderId: "214693180866"
    };
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
