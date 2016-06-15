// src/components/Root.jsx

import React from 'react'

import Header from './Header'
import NewsList from './NewsList'

const dpr = window.devicePixelRatio;

console.log('dpr: ' + dpr);

class Root extends React.Component {
  render() {
    let tag = 'all';
    if (this.props.params.tag) {
      tag = this.props.params.tag;
    }

    return (
      <div>
        <Header></Header>
        <NewsList tag={tag}></NewsList>
      </div>
    );
  }
}

export default Root;
