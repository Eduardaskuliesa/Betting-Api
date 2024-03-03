import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/football">
          Home
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
