import React from 'react';
import Gallery from '../components/Gallery';
import PageHeader from '../components/PageHeader';

export default () => (
  <section className="section  is-paddingless">
    <PageHeader title="Gallery" className="section-gallery-title" />
    <Gallery />
  </section>
);
