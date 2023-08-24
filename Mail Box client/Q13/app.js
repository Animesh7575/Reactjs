import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import EmailList from './EmailList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="sidebar">
          <button onClick={() => <EmailList sent={false} />}>Inbox</button>
          <button onClick={() => <EmailList sent={true} />}>Sent</button>
        </div>
        <EmailList sent={false} />
      </div>
    </Provider>
  );
}

export default App;
