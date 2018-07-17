import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './components/CommentBox'

function App() {
  return (
    <div className="App">
      <CommentBox />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
