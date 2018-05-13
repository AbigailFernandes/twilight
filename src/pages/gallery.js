import React from 'react';
import PhotoGrid from '../components/PhotoGrid';
import PageHeader from '../components/PageHeader';

export default () => (
  <section className="section  is-paddingless">
    <PageHeader title="Gallery" className="section-gallery-title" />
    <section className="section">
      <PhotoGrid />
    </section>
  </section>
);
