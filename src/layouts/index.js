import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Navbar, Footer } from '../components';
import './styles.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Shikha's Studio" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
