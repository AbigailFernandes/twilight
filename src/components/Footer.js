import React from 'react';
import iconInstagram from '../img/icons/icon-instagram.svg';
import iconFacebook from '../img/icons/icon-facebook-f.svg';

const Footer = () => (
  <footer className='footer app-footer has-text-centered'>
    <div>
      <a href='https://instagram.com' target='_blank'>
        <img className='brand-icon' src={iconInstagram} />
      </a>
      <a href='https://instagram.com' target='_blank'>
        <img className='brand-icon' src={iconFacebook} />
      </a>
    </div>
  </footer>
);

export default Footer;
