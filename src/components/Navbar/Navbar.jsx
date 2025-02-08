import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className='navbar'>
        <img className="nav-logo" src={Logo} />
        <ul className='nav-links'>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            
        </ul>
    </nav>
  );
}

export default Navbar;
