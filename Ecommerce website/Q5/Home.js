import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericsInfo from './GenericsInfo'; // Import the GenericsInfo component

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <ul className='header'>
          <li><NavLink to="/" exact>HOME</NavLink></li>
          <li><NavLink to="/store">STORE</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <a href="#cart" className="cart-holder">cart<span className='cart-number'>0</span></a>
        </ul>
        <h1>The Generics</h1>
      </header>

      <section id="music" className="container">
        <h2>MUSIC</h2>
        <div id="music-content">
          <GenericsInfo />
        </div>
      </section>

      {/* Other content */}
    </div>
  );
};

export default Home;