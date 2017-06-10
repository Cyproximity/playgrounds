import React from 'react';
import './style.css';

const VerticalNav = () => (
  <div className="wholeview-navigation">
    <div className="halfview left">
      <div className="core-contact">
        <h5><i className="ion-ios-arrow-forward" />Contact</h5>
        <h3>gerald.agustin09@gmail.com</h3>
        <ul className="micro-navsocial">
          <li><a href="https://www.facebook.com/iamGeraldAgustin">facebook</a></li>
          <li><a href="https://twitter.com/graldagstin">twitter</a></li>
          <li><a href="https://www.instagram.com/agustin.gerald/">instagram</a></li>
          <li><a href="https://dribbble.com/grldagstin">dribbble</a></li>
        </ul>
      </div>
    </div>
    <div className="halfview right">
      <nav className="core-navigation">
        <h5><i className="ion-ios-arrow-forward" />Navigation</h5>
        <div className="core-links">
          <h3>About</h3>
        </div>
        <div className="core-links">
          <h3>Vision</h3>
        </div>
        <div className="core-links">
          <h3>Studio</h3>
        </div>
        <div className="core-links">
          <h3>Blog</h3>
        </div>
      </nav>
    </div>
  </div>
);

export default VerticalNav;
