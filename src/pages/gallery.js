import React from 'react';
import PhotoGrid from '../components/PhotoGrid';
import PageHeader from '../components/PageHeader';
import { gallery } from '../img/headers';

export default () => (
  <section className="gallery-section section is-paddingless has-text-centered">
    <PageHeader image={gallery} />
    <container className="container is-fluid">
      <PhotoGrid />
    </container>
  </section>
);
