import React from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import jacob_parry from '../jacob_parry.jpeg';

function Navigation() {
  return (
    <div className="nav-sidebar">
      <div className="profile">
        <img src={jacob_parry} />
      </div>
      <div className="links">
        <NavLink activeClassName="active" className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/education">Education</NavLink>
        <NavLink className="link" to="/experience">Experience</NavLink>
        <NavLink className="link" to="/portfolio">Portfolio</NavLink>
        <NavLink className="link" to="/skills">Skills</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
