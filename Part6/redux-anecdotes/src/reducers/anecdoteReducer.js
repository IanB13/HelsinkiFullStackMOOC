const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  switch(action.type) {
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
      console.log('state now: ', state)
      console.log('action', action)
      return state
  }
}


export default reducer