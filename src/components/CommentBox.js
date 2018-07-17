import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [
        {
          author: 'Brian',
          text: 'Cool'
        },
        {
          author: 'Jane',
          text: 'No way'
        }
      ]
    }

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  handleCommentSubmit(comment) {
    comment.id = Date.now()
    const comments = this.state.comments.concat([comment])
    this.setState({comments})
  }

  render() {
    return (
      <div>
        <h2>Add a comment</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <h2>Comment List</h2>
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}
