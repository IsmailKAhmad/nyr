import React from 'react';
import Link from 'gatsby-link';
import cssModules from 'react-css-modules';

import styles from '../../../src/scss/Navbar.module.scss';

const Navbar = () => (
  <div styleName="_HEADER header-container">
    <div styleName="header">
      <div styleName="logo-wrap">
        <Link to="/">
          <div styleName="logo" className="clickable" />
        </Link>
      </div>
      <div styleName="page-title">
        <div styleName="page-title-inner">
          <span styleName="title">Review: Call Me By Your Name</span>
        </div>
      </div>
      <div styleName="hamburger" className="clickable" id="menu-open">
        <div styleName="hamburger-inner" />
        <div styleName="hamburger-inner" />
        <div styleName="hamburger-inner" />
      </div>
    </div>
    <div styleName="header-additional">
      <div styleName="additional-links">
        <div styleName="additional-link" className=" clickable">
          Recent
        </div>
        <div styleName="additional-link" className="clickable">
          Archive
        </div>
        <div styleName="additional-link" className="clickable">
          Best of 2017
        </div>
        <div styleName="additional-link" className="clickable">
          Subscribe
        </div>
      </div>
    </div>
  </div>
);

export default cssModules(Navbar, styles, { allowMultiple: true });
