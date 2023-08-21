import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './authReducer'; 

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Authentication App</h1>
      {isAuthenticated ? (
        <>
          <p>Welcome! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please login:</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;
