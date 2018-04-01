import React from 'react';
import { CourseSection } from '../components';
import { home1, home2 } from '../img/home';

export default () => (
  <div className='section'>
    <h1 className='is-size-2 has-text-centered'>Courses</h1>
    <CourseSection image={home1} />
    <CourseSection image={home2} />
  </div>
)