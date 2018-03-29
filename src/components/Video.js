import React from 'react';

export default ({ url }) => (
  <iframe
    width="560"
    height="315"
    src={url}
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  />
  // <div className="column is-3 album">
  //   <div className="card">
  //     <div className="card-image">
  //       <figure className="image is-4by3">
  //         <img src={artwork} alt={title} />
  //       </figure>
  //     </div>
  //     <header className="card-header">
  //       <p className="card-header-title">{title}</p>
  //     </header>
  //   </div>
  // </div>
);
