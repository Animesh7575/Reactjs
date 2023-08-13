import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs'; // Import the ContactUs component

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li> {/* Add NavLink for Contact Us */}
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} /> {/* Add Route for ContactUs */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;