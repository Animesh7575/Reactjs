import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import WelcomeScreen from './WelcomeScreen';
import Login from './Login';

const firebaseConfig = {
  // Your Firebase config here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const userToken = localStorage.getItem('userToken');
  const isLoggedIn = userToken !== null;

  return (
    <Router>
      <Route path="/login" component={Login} />
      {isLoggedIn ? (
        <Route path="/welcome" component={WelcomeScreen} />
      ) : (
        <Redirect to="/login" />
      )}
    </Router>
  );
};

export default App;
