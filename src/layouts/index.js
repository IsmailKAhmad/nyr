import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../scss/global/all.scss';

import Navbar from '../components/Navbar';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div style={{ paddingTop: '120px' }}>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
