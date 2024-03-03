/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoFootballOutline, IoTennisball } from 'react-icons/io5';
import { IoIosHome } from 'react-icons/io';
import { FaHamburger } from 'react-icons/fa';

import classes from './index.module.scss';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className={classes.nav}>
      <button
        className={classes.navToggle}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
        type="button"
      >
        <span><FaHamburger /></span>
      </button>
      <div className={`${classes.left} ${isNavExpanded ? classes.show : ''}`}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? `${classes.link} ${classes.activeLink}` : classes.link)}>
          Home
          <IoIosHome />
        </NavLink>
      </div>
      <ul className={`${classes.ul} ${isNavExpanded ? classes.show : ''}`}>
        <div className={classes.right}>
          <li>
            <NavLink to="/football" className={({ isActive }) => (isActive ? `${classes.link} ${classes.activeLink}` : classes.link)}>
              FootBall
              <IoFootballOutline />
            </NavLink>
          </li>
          <li>
            <NavLink to="/tennis" className={({ isActive }) => (isActive ? `${classes.link} ${classes.activeLink}` : classes.link)}>
              Tennis
              <IoTennisball />
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
