import React from 'react';
import '../stylesheets/page-header.scss';
import bridal1 from '../img/home/';

export default ({
  title = 'Page Title'
}) => (
  <div className='page-header'>
      <span className="header__title bordered-underline">{title}</span>
  </div>
);
