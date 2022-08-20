import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import { TiWeatherCloudy } from 'react-icons/ti';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? 'nav-bar__link--active' : 'nav-bar__link'
          }
        >
          <AiOutlineHome className="nav-bar__icon" />
        </NavLink>
        <NavLink
          to="/weather"
          className={({ isActive }) =>
            isActive ? 'nav-bar__link--active' : 'nav-bar__link'
          }
        >
          <TiWeatherCloudy className="nav-bar__icon" />
        </NavLink>
        <NavLink
          to="/maps"
          className={({ isActive }) =>
            isActive ? 'nav-bar__link--active' : 'nav-bar__link'
          }
        >
          <BiMap className='nav-bar__icon'/>
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
