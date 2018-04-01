import React from 'react';
import '../stylesheets/page-header.scss';
import bridal1 from '../img/home/';

export default ({
  title = 'Page Title',
  className = 'section-services-title',
}) => (
  <section className={className}>
    <div className="overlay has-text-centered">
      <h1 className="title is-1" style={{ color: 'white' }}>
        {title}
      </h1>
    </div>
  </section>
);
