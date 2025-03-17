import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/about" activeClassName="active">About Me</Link></li>
        <li><Link to="/portfolio" activeClassName="active">Portfolio</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        <li><Link to="/resume" activeClassName="active">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
