import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Navbar } from '../components';
import './styles.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Shikha's Studio" />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
