/**
 * 评论列表cell
 */
import React, { PropTypes } from 'react'

import moment from '../util/moment'

export default class CommentListCell extends React.Component {
  render() {
    const { commentInfo } = this.props;
    const time = moment(commentInfo.create_at).fromNow();
    return (
      <li>
        <div className="comment-box">
          <img src={commentInfo.author.avatar_url} alt=""/>
          <div>
            <div className="author">
              <span>{commentInfo.author.loginname}</span>
              <span>{time}</span>
            </div>
            <div className="content" dangerouslySetInnerHTML={{__html: commentInfo.content}} />
          </div>
        </div>
      </li>
    );
  }
}

CommentListCell.propType = {
  commentInfo: PropTypes.object.isRequired
};
