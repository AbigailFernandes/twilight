import React from 'react';

export default ({
  title = 'Page Title'
}) => (
  <div className='page-header'>
      <span className="header__title bordered-underline">{title}</span>
  </div>
);
