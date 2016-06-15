// 新闻列表每个条目的组件

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import moment from '../util/moment'

export default class NewsListCell extends React.Component {
  render() {
    const { newsInfo } = this.props;
    const timeDisplay = moment(newsInfo.create_at).fromNow();

    return (
      <li>
        <Link to={`/detail/${newsInfo.id}`}>
          <div>{newsInfo.title}</div>
          <div className="info">
            <img src={newsInfo.author.avatar_url} alt=""/>
            <span>{newsInfo.author.loginname}</span>
            <span>{timeDisplay}</span>
            { newsInfo.good ? <span className="good">精华</span> : '' }
            { newsInfo.top ? <span className="top">置顶</span> : ''}
          </div>
        </Link>
      </li>
    );
  }
}

//　当前组件属性的定义
NewsListCell.propTypes = {
  newsInfo: PropTypes.object.isRequired
}
