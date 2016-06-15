/**
 * 评论列表
 */
import React, { PropTypes } from 'react'

import Cell from './CommentListCell'

export default class CommentList extends React.Component {
  render() {
    console.log(this.props.replies.length);

    return (
      <ul className="comments-list">
        {this.props.replies.map((item, index)=>{
            console.log(item);
            return <Cell key={item.id} commentInfo={item}></Cell>;
        })}
      </ul>
    );
  }
}

CommentList.propTypes = {
  replies: PropTypes.array.isRequired
};
