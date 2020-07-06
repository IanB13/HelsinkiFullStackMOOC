const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES':
      console.error("here")
      console.log(action)
      return action.data
    case 'VOTE':
      const foundAnectode = state.filter(anecdote => anecdote.id === action.id)[0] //wil break on duplicate ids
      const votedAnectode = {...foundAnectode, votes:foundAnectode.votes+1}
      const voteState = state.map(
        anecdote => anecdote.id === action.id ? votedAnectode :anecdote
      )
      const sortedState = voteState.sort( (a,b) => b.votes - a.votes)
      return sortedState
    case 'ADD_ANECDOTE':
        console.log(action)
        const anecdoteObj = asObject(action.anecdote)
        const newAnecdoteState = state.concat(anecdoteObj)
        return newAnecdoteState
    default:
      return state
  }
}


export default reducer