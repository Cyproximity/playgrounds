import React from 'react';
import './style.css';

class VerticalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavWindowOpen: false,
    };
  }

  showWindowNav = () => {
    const { isNavWindowOpen } = this.state;
    this.setState({ isNavWindowOpen: !isNavWindowOpen });
  }

  render() {
    const { isNavWindowOpen } = this.state;
    return (
      <div>
        {/* hamburger menu */}
        <div className="core-humbermenu--container">
          <button className="hm--wrapper-box" onClick={this.showWindowNav}>
            <span className="hm--lines">
              <span className="lines" />
              <span className="lines" />
              <span className="lines" />
            </span>
          </button>
        </div>
        {/* fullnav */}
        <div className={`wholeview-navigation${(isNavWindowOpen ? ' show' : '')}`}>
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
      </div>
    );
  }
}

export default VerticalNav;
