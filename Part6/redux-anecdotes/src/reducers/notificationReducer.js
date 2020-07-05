const notificationReducer = (state = null, action) => {
    switch(action.type) {
      case("ADD_ANECDOTE"):
        return `Added ${action.anecdote}`
      case("VOTE"):
      return `you voted '${action.anecdote}' `
      case("REMOVE_NOTIFCIATION"):
      return null
      default:
        return state
    }
  }


export default notificationReducer