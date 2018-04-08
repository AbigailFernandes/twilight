import React from 'react';
import { home1 } from '../img/home';
import classNames from 'classnames';
import '../stylesheets/courses.scss';

export default ({ image = home1, reverse }) => (
  <div className="container course-section">
    <div className={classNames('course-container', 'is-flex', { reverse })}>
      <div className="course-photo">
        <figure className="aden">
          <img className="course-image" src={image} />
        </figure>
      </div>
      <div className="course-list">
        <span className="course-heading is-size-3">
          Professional Diploma in Makeup & Hair Styling
        </span>
        <ul>
          <li className="course-item">&bull; 14 Weeks Comprehensive Diploma in Makeup & Hairstyling </li>
          <li className="course-item">&bull; 9 Weeks Fast Track Diploma in Makeup & Hairstyling </li>
          <li className="course-item">&bull; 7 Weeks Beauty & Bridal Diploma in Makeup & Hairstyling</li>
        </ul>
      </div>
    </div>
  </div>
);
