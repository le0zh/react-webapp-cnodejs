/**
 * 帖子详情页面
 */
import React from 'react'
import reqwest from 'reqwest'
import moment from '../util/moment'

import Loading from './Loading'
import CommentList from './CommentList'

export default class Detail extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      blog: {} // 帖子详情对象
    }
  }

  componentWillMount() {
    // 请求数据
    reqwest({
      url: `https://cnodejs.org/api/v1/topic/${this.props.params.id}`,
      type: 'json',
      data: {},
      method: 'get'
    }).then(res => {
      this.setState({
        loading: false,
        blog: res.data
      });
    }, (err, msg) => {
      console.log(err);
      this.setState({
        loading: false,
        blog: {}
      });
    });
  }

  render() {
    const { blog, loading } = this.state;

    const timeDisplay = moment(blog.create_at).fromNow();

    if (loading) {
      return <Loading></Loading>;
    }

    return (
      <div className="blog">
        <div className="title">{blog.title}</div>
        <div className="avatar">
          <img src={blog.author.avatar_url} alt={blog.author.loginname} />
          <span className="loginname">{blog.author.loginname}</span>
          <span className="time">{timeDisplay}</span>
        </div>

        <div dangerouslySetInnerHTML={{__html: blog.content}} />

        <CommentList replies={blog.replies} />
      </div>
    );
  }
}
