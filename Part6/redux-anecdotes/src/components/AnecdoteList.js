import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addVote} from '../reducers/actions'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id,anecdote) => {
    dispatch(addVote(id,anecdote))
  }


  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList