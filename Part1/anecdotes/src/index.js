import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randnum = (max) => Math.round(max*Math.random());

const points = [0,0,0,0,0,0,0,0]

//doesn't re-render, look at notes on how to make array stateful

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const setToValue =(num) => setSelected(num)
  return (
      <>
          <div>
              {props.anecdotes[selected]}
          </div>
          <div>
              has {points[selected]} votes
          </div>
          <div>
              <button onClick={() => setToValue(randnum(props.anecdotes.length-1))}>
                  next anecdote
              </button>
              <button onClick={ () => points[selected]= points[selected]+1}> 
                  vote
              </button>
          </div>
      </>
  )
}

const anecdotes = [
  'first one',
    'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'last one'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)