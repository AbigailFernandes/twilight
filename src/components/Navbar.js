import React from 'react';
import Link from "gatsby-link";

const Navbar = () => (
  <section className="hero is-primary is-medium">
    <div className="hero-head">
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              />
            </a>
            <span
              className="navbar-burger burger"
              data-target="navbarMenuHeroA">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">Home</a>
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
    </div>

    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">Professional Makeup Artist</h1>
        <h2 className="subtitle">
          Whatever the occasion is, be sure that my professional make up work
          and products will make you shine and stand out
        </h2>
      </div>
    </div>

    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li className="is-active">
              <a>Overview</a>
            </li>
            <li>
              <a>Modifiers</a>
            </li>
            <li>
              <a>Grid</a>
            </li>
            <li>
              <a>Elements</a>
            </li>
            <li>
              <a>Components</a>
            </li>
            <li>
              <a>Layout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
);

export default Navbar;
