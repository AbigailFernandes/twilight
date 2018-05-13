import React from 'react';
import { ServiceSection, PageHeader } from '../components';
import { service1, service2, service3 } from '../img/home';

const services = [
  {
    image: service1,
    title: 'Bridal Makeup',
    peach: true,
    content: `Not only do you want to look flawless in photos on your big day, 
    but you want it to last through the tears, kisses, hugs and dancing. 
    Shikha works one-on-one with you to achieve your desired look for your big day. 
    Her and her team provides on-location make-up services for you and your party, whether big or small, 
    allowing you to truly enjoy and relax before walking down the aisle`,
  },
  {
    image: service2,
    title: 'On Location Services',
    cyan: true,
    content: `Shikha provides a vast array of on-location professional make-up services for both men and women. It could
    be for a photoshoot or an event.`,
  },
  {
    image: service3,
    title: 'Special Events',
    teal: true,
    content: `Shikha can create a signature look for any special occasion. She listens carefully to your ideas and works closely with 
    your tastes before putting together a bespoke makeup and hair plan that will produce fabulous results. `,
  },
];

export default () => (
  <section className="section is-paddingless">
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
