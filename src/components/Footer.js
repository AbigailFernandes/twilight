import React from 'react';
import iconInstagram from '../img/icons/icon-instagram.svg';
import iconFacebook from '../img/icons/icon-facebook-f.svg';

const Footer = () => (
  <footer className="footer app-footer">
    <div className="columns">
      <div className="has-text-centered column is-three-quarters">
        <a
          href="https://instagram.com/makeover_by_shikhajaiswal"
          target="_blank">
          <img className="brand-icon" src={iconInstagram} />
        </a>
        <a href="https://facebook.com/makeupartistshikha" target="_blank">
          <img className="brand-icon" src={iconFacebook} />
        </a>
      </div>
      <div className="column content">
        <h4 style={{ color: '#fff' }}>Contact</h4>
        <p style={{ color: '#fff' }}>+91 9930821626</p>
        <p style={{ color: '#fff' }}>shikhajasiwal1981@gmail.com</p>
        <p />
      </div>
    </div>
  </footer>
);

export default Footer;
