import React from 'react';

import './style.css';
import './responsive.css';
import './keyframes.css';
import Anime from '../../configs/AnimeComponent';

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
      <div className={`nav--wrapper${(isNavWindowOpen ? ' isopen' : '')}`}>
        {/* hamburger menu */}
        <div className="core-humbermenu--container">
          <Anime easing="easeOutElastic" loop={false} duration={1000} scale={[0.8, 1]}>
            <button className="hm--wrapper-box" onClick={this.showWindowNav}>
              <span className="hm-a-lines--wrapper">
                <div className="lines close">
                  <span className="a--lines" />
                  <span className="a--lines" />
                </div>
                <div className="lines open">
                  <span className="a--lines" />
                  <span className="a--lines" />
                  <span className="a--lines" />
                </div>
              </span>
            </button>
          </Anime>
        </div>
        {/* fullnav */}
        <div className={`wholeview-navigation${(isNavWindowOpen ? ' show' : '')}`}>
          <div className="halfview left">
            <div className="core-contact">
              <Anime easing="easeOutBack" loop={false} duration={300} delay={(el, index) => index * 130} opacity={(isNavWindowOpen ? 1 : 0)} translateY={(isNavWindowOpen ? '0' : '150%')}>
                <h5><i className="ion-ios-arrow-forward" />Contact</h5>
                <h3>gerald.agustin09@gmail.com</h3>
                <ul className="micro-navsocial">
                  <li><a href="https://www.facebook.com/iamGeraldAgustin">facebook</a></li>
                  <li><a href="https://twitter.com/graldagstin">twitter</a></li>
                  <li><a href="https://www.instagram.com/agustin.gerald/">instagram</a></li>
                  <li><a href="https://dribbble.com/grldagstin">dribbble</a></li>
                </ul>
              </Anime>
            </div>
          </div>
          <div className="halfview right">
            <nav className="core-navigation">
              <Anime easing="easeOutBack" loop={false} duration={300} delay={(el, index) => index * 90} opacity={(isNavWindowOpen ? 1 : 0)} translateY={(isNavWindowOpen ? '0' : '150%')}>
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
              </Anime>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default VerticalNav;
