import React from 'react';
import { useHistory } from 'react-router-dom'; 
import firebase from 'firebase/app';
import 'firebase/auth';

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        // Clear idToken from local storage
        localStorage.removeItem('idToken');
        // Redirect to the login page
        history.push('/login');
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <header>
      <nav>
       
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
