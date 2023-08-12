// src/components/GenericsInfo.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const GenericsInfo = () => {
  return (
    <div className="generics-info">
      <h2>The Generics</h2>
      <p>Get our Latest Album</p>
      <NavLink to="/tours"><button>►</button></NavLink>

      <div className="tour-dates">
        <h3>TOURS</h3>
        <div className="tour-date">
          <p>JUL 16</p>
          <p>DETROIT, MI</p>
          <p>DTE ENERGY MUSIC THEATRE</p>
          <NavLink to="/buy-tickets"><button>BUY TICKETS</button></NavLink>
        </div>
        <div className="tour-date">
          <p>JUL 19</p>
          <p>TORONTO, ON</p>
          <p>BUDWEISER STAGE</p>
          <NavLink to="/buy-tickets"><button>BUY TICKETS</button></NavLink>
        </div>
        <div className="tour-date">
          <p>JUL 22</p>
          <p>BRISTOW, VA</p>
          <p>JIGGY LUBE LIVE</p>
          <NavLink to="/buy-tickets"><button>BUY TICKETS</button></NavLink>
        </div>
        <div className="tour-date">
          <p>JUL 29</p>
          <p>PHOENIX, AZ</p>
          <p>AK-CHIN PAVILION</p>
          <NavLink to="/buy-tickets"><button>BUY TICKETS</button></NavLink>
        </div>
        <div className="tour-date">
          <p>AUG 2</p>
          <p>LAS VEGAS, NV</p>
          <p>T-MOBILE ARENA</p>
          <NavLink to="/buy-tickets"><button>BUY TICKETS</button></NavLink>
        </div>
        <div className="tour-date">
          <p>AUG 7</p>
          <p>CONCORD, CA</p>
          <p>CONCORD PAVILION</p>
          <NavLink to="/buy-tickets"><button>BUY TICKETS</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default GenericsInfo;