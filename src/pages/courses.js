import React from 'react';
import { CourseSection, PageHeader } from '../components';
import { s1, s2, s3 } from '../img/courses';

const courses = [
  {
    image: s1,
    title: 'Bridal Makeup course',
    reverse: false,
    content: [
      '4 week comprehensive detailed course.',
      'Focus on Mehendi, Cocktail, Sangeet, Wedding and Reception looks.',
      'Learn how to prep and prime. Learn the proper application of corrector, concealer and foundation, contouring, highlighting and blush application',
      'Learn techniques to perfect fuller lips and lash application',
    ],
  },
  {
    image: s3,
    title: 'Special Events and Party Makeup course',
    reverse: true,
    content: [
      '2-3 weeks comprehensive detailed course in make-up',
      'Everyday Make-up Look, Nude Look, Monochromatic Look, Bronzy Glow make-up Look, Smokey Eyes, Dewy Look, Super Glam Make-up Look.',
      'Learn how to prep and prime. Learn the proper application of corrector, concealer and foundation, contouring, highlighting and blush application',
      'Learn techniques to perfect fuller lips and lash application',
    ],
  },
  {
    image: s2,
    title: 'Personal Grooming',
    reverse: false,
    content: [
      'Per day grooming classes based on what the client wants to learn.',
      'Personal grooming includes basic self-learning make-up sessions, day & night look, party make-up look (smokey eyes) etc.',
      'We also provide courses for Saree Draping (2 weeks) and Hairstyling (1 week).',
    ],
  },
];

export default () => (
  <div className="section is-paddingless">
    <PageHeader title="ℂ𝕆𝕌ℝ𝕊𝔼𝕊" />
    <div className="course-page">
      {courses.map(course => <CourseSection key={course.title} {...course} />)}
    </div>
  </div>
);
