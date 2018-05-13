import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <span className="navbar-burger burger" data-target="navbarMenuHeroA">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navbarMenuHeroA" className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/courses">
            Courses
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/services">
              Services
            </Link>
            {/* <div className="navbar-dropdown is-boxed is-primary">
              <Link className="dropdown-item" to="/about">
                Bridal Makeup
              </Link>
              <Link className="dropdown-item" to="/about">
                TV Commerical
              </Link>
              <Link className="dropdown-item" to="/about">
                Special Occasions
              </Link>
            </div> */}
          </div>
          <Link className="navbar-item" to="/gallery">
            Gallery
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
