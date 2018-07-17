import React from 'react'

export default function comment(props) {
  return (
    <div className="comment">
      <h4>{props.author}</h4>
      <p>{props.children}</p>
    </div>
  )
}
