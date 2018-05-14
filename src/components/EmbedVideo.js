import React from 'react';
import { makeupSmear } from "../img/home";

export default ({ url }) => (
  <section
    className="section video-section is-flex"
    style={{ backgroundImage: `url(${makeupSmear})` }}>
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
