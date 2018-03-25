import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
        </a>
        <span className="navbar-burger burger" data-target="navbarMenuHeroA">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navbarMenuHeroA" className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item is-active" to="/">
            Home
          </Link>
          <a className="navbar-item">About</a>
          <a className="navbar-item">Courses</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Services</a>
            <div className="navbar-dropdown is-boxed is-primary">
              <a className="dropdown-item">Bridal Makeup</a>
              <a className="dropdown-item">TV Commerical</a>
              <a className="dropdown-item">Special Occasions</a>
            </div>
          </div>
          <a className="navbar-item">Portfolio</a>
          <Link className="navbar-item" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
