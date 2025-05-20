import React, { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/', label: 'Главная страница' },
    { path: '/map', label: 'Карта парковок' },
    { path: '/news', label: 'Новости' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span>MyParking.by</span>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <div className="close-icon" onClick={toggleMenu}>&times;</div>
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
