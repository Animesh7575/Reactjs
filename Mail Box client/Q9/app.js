import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import EmailList from './EmailList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EmailList />
      </div>
    </Provider>
  );
}

export default App;

