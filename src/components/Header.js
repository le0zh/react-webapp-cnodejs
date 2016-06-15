// 顶部栏

import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

let menuIndex = 0;

export default class Header extends React.Component {
  constructor() {
    super();

    this.placeSlider = this.placeSlider.bind(this);
    this.navMenuClicked = this.navMenuClicked.bind(this);
  }

  placeSlider(activeMenu) {
    const menus = activeMenu.parentNode.getElementsByTagName('a');
    let count = 0;
    for (var i = 0; i < menus.length; i++) {
      count++;
      if (activeMenu == menus[i]) {
        menuIndex = i;
        break;
      }
    }

    var x = activeMenu.clientWidth * (count - 1);
    this.refs.slider.style.width = activeMenu.clientWidth - 6 + 'px';
    this.refs.slider.style.transform = `translateX(${x}px)`;
  }

  navMenuClicked(e) {
    this.placeSlider(e.target);
  }

  componentDidMount() {
    const activeMenu = document.querySelector(".header a.active");
    this.placeSlider(activeMenu);
  }

  render() {
    return (
      <nav className="header">
        <span ref="slider" id="slider"></span>
        <IndexLink activeClassName="active" onClick={this.navMenuClicked} to="/" className="menu">全部</IndexLink>
        <Link activeClassName="active" onClick={this.navMenuClicked} to="/list/good" className="menu">精华</Link>
        <Link activeClassName="active" onClick={this.navMenuClicked} to="/list/ask" className="menu">问答</Link>
        <Link activeClassName="active" onClick={this.navMenuClicked} to="/list/job" className="menu">招聘</Link>
        <Link activeClassName="active" onClick={this.navMenuClicked} to="/list/share" className="menu">分享</Link>
      </nav>
    );
  }
}
