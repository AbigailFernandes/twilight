import React from 'react';
import { ServiceSection, PageHeader } from '../components';
import { service1, service2, service3 } from '../img/home';

const services = [
  {
    image: service1,
    title: 'Bridal Makeup',
    peach: true,
    content:
      'Considering just how important the makeup arts are for these industries, the quality of my work was required to match the class. After hundreds of sessions it seems it did!',
  },
  {
    image: service2,
    title: 'TV Film Commercial',
    cyan: true,
    content:
      'Considering just how important the makeup arts are for these industries, the quality of my work was required to match the class. After hundreds of sessions it seems it did!',
  },
  {
    image: service3,
    title: 'Special Occasions',
    teal: true,
    content:
      'Considering just how important the makeup arts are for these industries, the quality of my work was required to match the class. After hundreds of sessions it seems it did!',
  },
];

export default () => (
  <section className="section">
    <PageHeader title="Services" className="section-services-title" />
    <section className="section">
      <div className="columns is-centered is-gapless">
        {services.map(service => (
          <ServiceSection key={service.title} {...service} />
        ))}
      </div>
    </section>
  </section>
);
