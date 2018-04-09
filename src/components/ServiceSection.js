import React from 'react';
import { service1 } from '../img/home';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight';
import '../stylesheets/services.scss';

export default ({ content, title, image, peach, cyan, teal }) => (
  <div
    className={classNames('column', 'is-one-quarter', {
      peach,
      cyan,
      teal,
    })}>
    <div className="service-photo">
      <figure className="aden">
        <img src={image} />
      </figure>
    </div>
    <div className="service-contents">
      <h1 className="title is-3">{title}</h1>
      <p className="has-text-justified">{content}</p>
      <a className="button is-dark is-outlined padding">
        Read More &nbsp;
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </a>
    </div>
  </div>
);
