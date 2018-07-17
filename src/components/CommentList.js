import React, { Component } from "react"
import Comment from "./Comment"

export default class CommentList extends Component {
  render() {
    const { comments } = this.props

    return (
      <div className="comment-list">
        {comments.map((comment, ndx) => (
          <Comment key={`comment-${ndx}`} author={comment.author}>
            {comment.text}
          </Comment>
        ))}
      </div>
    )
  }
}
