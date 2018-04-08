import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import '../stylesheets/contact.scss';

export default () => (
  <div>
    <section className="section is-marginless map-container">
      <iframe
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdeat8zusvPYq4mdlydHY04lWNLhlX8Jw
    &q=Shikha+Studio"
        allowFullscreen
      />
    </section>
    <section className="section form-section">
      <div className="container">
        <div className="columns">
          <div className="column is-half contact-form">
            <div className="margin-bottom-2">
              <span className="is-size-4">Contact Us</span>
            </div>

            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Enter your name" />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Enter your email" />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="What do you want to know?" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
