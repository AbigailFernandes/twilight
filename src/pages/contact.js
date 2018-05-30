import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import { PageHeader } from '../components';
import '../stylesheets/contact.scss';

export default () => (
  <div>
    <section className="section is-paddingless">
      <PageHeader title="ℂ𝕆ℕ𝕋𝔸ℂ𝕋 𝕌𝕊" />
      <section className="section form-section">
        <div className="container">
          <div className="columns">
            <div className="column is-half contact-form">
              <div className="margin-bottom-2">
                <span className="is-size-4">Contact Shikha</span>
              </div>

              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
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
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="What do you want to know?"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-link">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="column">
              <section className="section is-marginless map-container">
                <iframe
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1295319683054!2d72.84034371546223!3d19.101972587073032!2m3!1f0!2
                  f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9cf82ab11cd%3A0x24ae24fa4fe1aa1!2sTitan+Ceramic+And+Cement+Centre!5e0!3m2!1sen!2sin!4v1527323091304"
                  allowFullscreen
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
);
