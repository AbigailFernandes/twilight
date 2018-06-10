import React from 'react';
import { home1 } from '../img/home';
import classNames from 'classnames';
import '../stylesheets/courses.scss';

export default ({
  image = home1,
  reverse,
  title = 'Default',
  content = ['default'],
}) => (
  <div className="container course-section">
    <div className={classNames('course-container', 'is-flex', { reverse })}>
      <div className="course-photo">
        <figure className="aden">
          <img className="course-image" src={image} />
        </figure>
      </div>
      <div className="course-list content">
        <span className="course-heading is-size-3">{title}</span>
        <ul>
          {content.map((item, i) => (
            <li className="course-item" key={i}>
              {item}{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
