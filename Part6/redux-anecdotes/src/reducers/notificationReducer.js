const notificationReducer = (state = null, action) => {
    switch(action.type) {
      case("ADD_ANECDOTE"):
        return `Added ${action.anecdote.content}`
      case("VOTE"):
      return `you voted '${action.anecdote.content}' `
      case("REMOVE_NOTIFCIATION"):
      return null
      default:
        return state
    }
  }


export default notificationReducer