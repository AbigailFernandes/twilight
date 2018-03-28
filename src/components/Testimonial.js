import React from 'react';
import clientAvatar from '../img/client.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faQuoteLeft from '@fortawesome/fontawesome-free-solid/faQuoteLeft';

export default ({
  clientName = 'Juhi Jayaram',
  clientReview = 'Finding the shampoo that is both healthy and nice for your hair is not easy for any woman… So when I found how many hair care products are offered here I was hooked once and for all!',
}) => (
  <section className="section-testimonial">
    <div className="section section-title">
      <h3 className="title is-3">Customer Saying</h3>
    </div>
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter testimonial-item">
        <div className="margin-btm text-center">
          <img src={clientAvatar} alt="client avatar" className="img-circle" />
        </div>
        <div className="text-center margin-btm">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <p className="text-center margin-btm">{clientReview}</p>
        <p className="text-center">
          <strong>{clientName}</strong>
        </p>
      </div>
    </div>
  </section>
);
