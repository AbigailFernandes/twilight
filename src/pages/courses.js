import React from 'react';
import { CourseSection, PageHeader } from '../components';
import { home1, home2 } from '../img/home';

export default () => (
  <div className="section course-page">
    <h1 className="is-size-2 has-text-centered">Courses</h1>
    <CourseSection image={home1} />
    <CourseSection image={home2} />
  </div>
);
