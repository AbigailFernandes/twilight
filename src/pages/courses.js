import React from 'react';
import { CourseSection, PageHeader } from '../components';
import { home1, home2 } from '../img/home';

const courses = [
  {
    image: home1,
    title: 'Bridal Makeup course',
    reverse: false,
    content: ['4-5 weeks comprehensive detailed course.'],
  },
  {
    image: home2,
    title: 'Professional Make-up and Hair Styling',
    reverse: true,
    content: [
      '10-12 weeks comprehensive detailed course in make-up and hairstyling',
      'Additional week for draping.',
    ],
  },
  {
    image: home1,
    title: 'Personal Grooming',
    reverse: false,
    content: [
      'Per day grooming classes based on what the client wants to learn.',
      'Personal grooming includes basic self-learning make-up sessions, day & night look, party make-up look (smokey eyes) etc.',
    ],
  },
];
export default () => (
  <div className="section course-page is-paddingless">
    <PageHeader title="ℂ𝕆𝕌ℝ𝕊𝔼𝕊" />
    {courses.map(course => <CourseSection key={course.title} {...course} />)}
  </div>
);
