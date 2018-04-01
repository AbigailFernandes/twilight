import React from 'react';
import Link from 'gatsby-link';

export default ({
  title = 'Album title',
  artwork = 'https://bulma.io/images/placeholders/1280x960.png',
}) => (
  <div className="column is-3 album">
    <Link to="/albums/2018-12-17-bridal-makeup">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={artwork} alt={title} />
          </figure>
        </div>
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>
      </div>
    </Link>
  </div>
);
