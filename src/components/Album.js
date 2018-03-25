import React from 'react';

export default ({
  title = 'Album title',
  artwork = 'https://bulma.io/images/placeholders/1280x960.png',
}) => (
  <div className="column is-3 album">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={artwork} alt={title} />
        </figure>
      </div>
      <header class="card-header">
        <p class="card-header-title">{title}</p>
      </header>
    </div>
  </div>
);
