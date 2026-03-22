import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaBars, FaTimes, FaCog } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container-fluid px-4"> {/* Used container-fluid for wider spread like reference */}
        <nav className="navbar navbar-expand-lg">
          {/* Logo Section */}
          <Link to="/" className={styles.logoWrapper}>
             <div className={styles.logoBox}>
               <span className={styles.logoText}>TS</span>
             </div>
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            className={`navbar-toggler ${styles.navbarToggler}`} 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navbarNav" 
            aria-expanded={isOpen} 
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Centered Navigation */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} justify-content-center`} id="navbarNav">
            <ul className={`navbar-nav ${styles.navbarNav}`}>
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/projects" 
                  className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink 
                  to="/blog" 
                  className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink 
                  to="/more" 
                  className={({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  More
                </NavLink>
              </li> */}
            </ul>
          </div>

          {/* Right Actions */}
          <div className={`d-none d-lg-flex align-items-center ${styles.rightActions}`}>
            {/* <button className={styles.settingsBtn}>
              <FaCog />
            </button> */}
            <Link to="/contact" className={styles.contactBtn}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
