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
    const getId = () => (100000 * Math.random()).toFixed(0)
    const asObject = (anecdote) => {
        return {
            content: anecdote,
            id: getId(),
            votes: 0
        }
    }
    
    return async dispatch => {
        await anecdoteServices.post(asObject(anecdote))
        dispatch({
            type: 'ADD_ANECDOTE',
            anecdote: asObject(anecdote)
        })
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