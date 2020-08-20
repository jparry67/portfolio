import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav-sidebar">
      <div className="profile">
      </div>
      <div className="links">
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/education">Education</Link>
        <Link className="link" to="/experience">Experience</Link>
        <Link className="link" to="/portfolio">Portfolio</Link>
        <Link className="link" to="/skills">Skills</Link>
      </div>
    </div>
  );
}

export default Navigation;
