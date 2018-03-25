import React from 'react';

export default ({ title = 'Album title' }) => (
  <div className='column album'>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <header class="card-header">
        <p class="card-header-title">
          { title }
        </p>
      </header>
    </div>
  </div>
);
