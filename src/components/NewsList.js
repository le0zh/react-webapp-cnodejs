// 新闻列表组件

import React from 'react'
import reqwest from 'reqwest'

import Loading from './Loading'
import Cell from './NewsListCell'

export default class NewsList extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      data: []
    };
  }

  fetchData(_tab) {
    reqwest({
      url: 'https://cnodejs.org/api/v1/topics',
      type: 'json',
      data: { page: 1, limit: 30, tab: _tab },
      method: 'get'
    }).then(res => {
      this.setState({
        loading: false,
        data: res.data
      });
    }, (err, msg) => {
      console.log(err);
    });
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.tag !== nextProp.tag) {
      // 清空数据
      this.setState({
        loading: true,
        data: []
      });
      this.fetchData(nextProp.tag);
    }
  }

  componentWillMount() {
    this.fetchData(this.props.tag);
  }

  render() {
    if (this.state.loading) {
      return <Loading></Loading>;
    }

    return (
      <section id="page">
        <ul className="posts-list">
          {this.state.data.map((item, index)=>{
            return <Cell key={item.id} newsInfo={item}></Cell>;
          })}
        </ul>
      </section>
    );
  }
}
