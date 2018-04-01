import React from 'react';
import { home1 } from '../img/home';
import '../stylesheets/courses.scss';

export default () => (
  <div className="container columns course-section">
    <div class="column is-one-quarter" />
    <div className="course-photo column is-one-third ">
      <figure className="walden">
        <img src={home1} />
      </figure>
    </div>
    <div className="course-list column is-one-quarter content">
      <h2 className="is-size-3 has-text-grey">
        Professional Diploma in Makeup & Hair Styling
      </h2>
      <ul>
        <li>14 Weeks Comprehensive Diploma in Makeup & Hairstyling </li>
        <li>9 Weeks Fast Track Diploma in Makeup & Hairstyling </li>
        <li>7 Weeks Beauty & Bridal Diploma in Makeup & Hairstyling</li>
      </ul>
    </div>
  </div>
);
