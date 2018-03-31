import React from 'react';

export default ({ url }) => (
  <section className="section is-flex" style={{ justifyContent: 'center' }}>
    <iframe
      width="560"
      height="315"
      src={url}
      frameBorder="1"
      type="text/html"
      autoPlay={1}
      allowFullScreen
    />
  </section>
);
