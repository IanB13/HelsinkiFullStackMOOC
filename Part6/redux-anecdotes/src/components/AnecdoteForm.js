import React from 'react'
import {useDispatch } from 'react-redux'
import {addAnecdote} from '../reducers/actions'


const AnecdoteForm =() =>{
    const dispatch = useDispatch()

    const add =(event) =>{
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        dispatch(addAnecdote(anecdote))
        event.target.anecdote.value = "" //clears after submit
      }

    return (
        <>
          <h2>create new</h2>
          <form onSubmit ={add}>
            <div><input name = "anecdote"/></div>
            <button >create</button>
          </form>
        </>
      )

}

export default AnecdoteForm