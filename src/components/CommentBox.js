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
  }

  render() {
    return (
      <div>
        <CommentForm />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}
