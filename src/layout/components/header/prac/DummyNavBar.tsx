// File: DummyNavBar.tsx
import React, { useState } from 'react';
import './dummy-navbar.scss';

const DummyNavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className='dummy-navbar'>
      <div className='navbar-container'>
        <div className='logo'>MyLogo</div>
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href='#home' onClick={() => setMobileMenuOpen(false)}>
            Home
          </a>
          <a href='#about' onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href='#services' onClick={() => setMobileMenuOpen(false)}>
            Services
          </a>
          <a href='#contact' onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <button
          aria-label='Toggle menu'
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          type='button'
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
      </div>
    </header>
  );
};

export default DummyNavBar;
