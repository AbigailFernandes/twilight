import React from 'react';
import { CourseSection, PageHeader } from '../components';
import { s1, s2, s3 } from '../img/courses';

const courses = [
  {
    image: s1,
    title: 'Bridal Makeup course',
    reverse: false,
    content: ['4-5 weeks comprehensive detailed course.'],
  },
  {
    image: s3,
    title: 'Professional Make-up and Hair Styling',
    reverse: true,
    content: [
      '10-12 weeks comprehensive detailed course in make-up and hairstyling',
      'Additional week for draping.',
    ],
  },
  {
    image: s2,
    title: 'Personal Grooming',
    reverse: false,
    content: [
      'Per day grooming classes based on what the client wants to learn.',
      'Personal grooming includes basic self-learning make-up sessions, day & night look, party make-up look (smokey eyes) etc.',
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
