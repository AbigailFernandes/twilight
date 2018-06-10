import React from 'react';
import { images } from '../img/mainPage';
import '../stylesheets/portfolio.scss';

export default () => (
  <section className="section is-flex" style={{ justifyContent: 'center' }}>
    <div className="photo-grid">
      {images.map((item, i) => (
        <figure className="portfolio-figure" key={i}>
          <img className="photo" src={item.src} />
        </figure>
      ))}
    </div>
  </section>
);
