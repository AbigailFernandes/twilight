import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faQuoteLeft from '@fortawesome/fontawesome-free-solid/faQuoteLeft';
import '../stylesheets/testimonial.scss';

export default ({ name = 'Juhi Jayaram', review = 'Default' }) => (
  <div className="testimonial">
    <div className="has-text-centered margin-bottom-2">
      <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
    </div>
    <p className="has-text-justified margin-bottom-2">{review}</p>
    <p className="has-text-centered">
      <strong>{name}</strong>
    </p>
  </div>
);
