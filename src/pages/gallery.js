import React from 'react';
import PhotoGrid from '../components/PhotoGrid';
import PageHeader from '../components/PageHeader';

export default () => (
  <section className="gallery-section section is-paddingless has-text-centered">
    <PageHeader title="𝔾𝔸𝕃𝕃𝔼ℝ𝕐" />
    <container className="container is-fluid">
      <PhotoGrid />
    </container>
  </section>
);
