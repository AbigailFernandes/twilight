import React from 'react';
import clientAvatar from '../img/client.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faQuoteLeft from '@fortawesome/fontawesome-free-solid/faQuoteLeft';

export default ({
  client = {
    name: 'Juhi Jayaram',
    review:
      'Finding the shampoo that is both healthy and nice for your hair is not easy for any woman… So when I found how many hair care products are offered here I was hooked once and for all!',
  },
}) => (
  <section className="section-testimonial">
    <div className="section has-text-centered">
      <h3 className="title is-3">Customer Saying</h3>
    </div>
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter margin-bottom-3">
        <div className="horizontal-center is-flex">
          <figure className="has-text-centered image is-128x128 margin-bottom-2">
            <img
              src={clientAvatar}
              alt="client avatar"
              className="img-circle"
            />
          </figure>
        </div>
        <div className="has-text-centered margin-bottom-2">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <p className="has-text-centered margin-bottom-2">{client.review}</p>
        <p className="has-text-centered">
          <strong>{client.name}</strong>
        </p>
      </div>
    </div>
  </section>
);
