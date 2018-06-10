import React from 'react';
import { CourseSection, PageHeader } from '../components';
import { s1, s2, s3 } from '../img/courses';
import { servicesHeader } from '../img/headers';

const courses = [
  {
    image: s1,
    title: 'Bridal Makeup',
    reverse: false,
    content: [
      'Bridal Trial/Preview Sessions (Includes lashes & make-up)',
      'Bridal Makeup Application (Includes lashes, make-up and a touch-up kit)',
      'Bridal Party Makeup Application (includes full face make-up application)',
      'Flower Girl/Junior Bridesmaid Make-up Application (under the age of 13)',
      'Male Grooming (oil control, concealer, light coverage)',
      'Tattoo/Body/Scar Cover-up',
    ],
  },
  {
    image: s3,
    title: 'On Location Services',
    reverse: true,
    content: [
      'Make-up Lessons',
      ' Event Make-up',
      'Headshot/Corporate Photoshoots',
      'Portfolio Photoshoots',
      'Light Hair Styling',
      'Male Make-up and Grooming',
      'Production & Print (photography and video) and more!',
    ],
  },
];

export default () => (
  <div className="section is-paddingless">
    <PageHeader image={servicesHeader} />
    <div className="course-page">
      {courses.map(course => <CourseSection key={course.title} {...course} />)}
      <div className="content">
        <h4>PLEASE CONTACT US FOR RATES</h4>
      </div>
    </div>
  </div>
);
