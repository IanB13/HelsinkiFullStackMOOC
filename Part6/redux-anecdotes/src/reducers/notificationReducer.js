const notificationReducer = (state = null, action) => {
    switch(action.type) {
      case("ADD_ANECDOTE"):
        return `Added ${action.anecdote}`
      case("VOTE"):
      return `you voted '${action.anecdote}' `
      case("REMOVE_NOTIFCIATION"):
      return null
      default:
        console.error('unhandled action')
        console.log('state now: ', state)
        console.log('action', action)
        return state
    }
  }


export default notificationReducer