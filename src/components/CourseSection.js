import React from 'react';
import { home1 } from '../img/home';
import '../stylesheets/courses.scss';

export default ({ image = home1 }) => (
  <div className="container columns course-section">
    <div class="column is-2-desktop is-hidden-touch" />
    <div className="course-photo column is-one-third-desktop is-half-tablet">
      <figure className="aden">
        <img className="course-image" src={image} />
      </figure>
    </div>
    <div className="course-list column is-one-third-desktop is-half-tablet content">
      <span className="is-size-3 has-text-grey">
        Professional Diploma in Makeup & Hair Styling
      </span>
      <ul>
        <li>14 Weeks Comprehensive Diploma in Makeup & Hairstyling </li>
        <li>9 Weeks Fast Track Diploma in Makeup & Hairstyling </li>
        <li>7 Weeks Beauty & Bridal Diploma in Makeup & Hairstyling</li>
      </ul>
    </div>
  </div>
);
