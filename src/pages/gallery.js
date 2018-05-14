import React from 'react';
import PhotoGrid from '../components/PhotoGrid';
import PageHeader from '../components/PageHeader';

export default () => (
  <section className="section  is-paddingless has-text-centered">
    <PageHeader title="gαℓℓєяу" />
    <container className="container is-fluid">
      <PhotoGrid />
    </container>
  </section>
);
