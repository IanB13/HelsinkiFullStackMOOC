export const removeNotification = () => {
    return {
        type: "REMOVE_NOTIFCIATION"
    }
}

export const addVote = (id) => {
    return {
        type: "VOTE",
        id
    }
}

export const addAnecdote = (anecdote) => {
    return {
        type: "ADD_ANECDOTE",
        anecdote
    }
}