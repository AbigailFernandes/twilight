import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEevelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import '../stylesheets/contact.scss';

export default () => (
  <div>
    <section className="section is-marginless map-container">
      <iframe
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdeat8zusvPYq4mdlydHY04lWNLhlX8Jw
    &q=Shikha+Studio"
        allowfullscreen
      />
    </section>
    <section className="section form-section">
      <div className="container">
        <div className="columns">
          <div className="column is-half contact-form">
            <div className="margin-bottom-2">
              <span className="is-size-4">Contact Us</span>
            </div>

            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Enter your name" />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Enter your email" />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faEevelope} />
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle" />
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="What do you want to kow?" />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
