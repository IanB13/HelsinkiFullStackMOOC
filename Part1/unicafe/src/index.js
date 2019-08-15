import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
    return (
      <div>
        <p>Hello world</p>
        <p>This is nice</p>
        <input type="button"></input>
      </div>
    )
  }

const App = () => {
    return (
        <div>
          <h1>Greetings</h1>
          <Hello />
        </div>
      )
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)