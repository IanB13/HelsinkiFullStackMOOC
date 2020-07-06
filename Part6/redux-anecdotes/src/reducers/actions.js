import anecdoteServices from '../services/anecdotes'

export const removeNotification = () => {
    return {
        type: "REMOVE_NOTIFCIATION"
    }
}

export const addVote = (id,anecdote) => {
    return {
        type: "VOTE",
        id,
        anecdote
    }
}

export const addAnecdote = (anecdote) => {
    return {
        type: "ADD_ANECDOTE",
        anecdote
    }
}

export const filterAnecdotes = (filter,anecdotes) =>{
    return{
        type: "FILTER",
        filter,
        anecdotes
    }
}


  export const initializeAnecdotes = () => {
    return async dispatch => {
      const anecdotes = await anecdoteServices.getAll()
      dispatch({
        type: 'INIT_ANECDOTES',
        data: anecdotes,
      })
    }
  }