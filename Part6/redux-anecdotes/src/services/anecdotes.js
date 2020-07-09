import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (anecdote) =>{
  const response= await axios.post(baseUrl,anecdote)
  return response.data
}

//takes new array of all anecdotes with updated vote count
const vote = async(newAnecdote,id) =>{
  const response = await axios.put(`${baseUrl}/${id}`,newAnecdote)
  return response.data
}

export default { getAll,post,vote }