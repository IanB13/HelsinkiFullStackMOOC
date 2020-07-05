const notificationReducer = (state = "no notification", action) => {
    switch(action.type) {
      default:
        console.log('IN notification reducer')
        console.log('state now: ', state)
        console.log('action', action)
        return state
    }
  }

export default notificationReducer