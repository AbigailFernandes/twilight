import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

class Navbar extends React.Component {
  state = {
    menuOpen: false,
  };

  constructor() {
    super();

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <a
              role="button"
              className={classNames('navbar-burger', { 'is-active': menuOpen })}
              onClick={this.toggleNavbar}
              aria-label="menu"
              aria-expanded="false">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={classNames('navbar-menu', { 'is-active': menuOpen })}>
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
                <div className="navbar-dropdown is-boxed is-primary">
                  <Link className="dropdown-item" to="/serviceDetails">
                    Bridal Makeup
                  </Link>
                  <Link className="dropdown-item" to="/serviceDetails">
                    On Location Services
                  </Link>
                  {/* <Link className="dropdown-item" to="/about">
                    Special Occasions
                  </Link> */}
                </div>
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
  }
}

export default Navbar;
