import axios from 'axios'

const baseUrl = '/api/blogs'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addlike = async (object) =>{
object.likes++
 const response  =await axios.put(`${baseUrl}/${object.id}`,object)
 return response
}

const deleteBlog = async (object) =>{
  const config = {
    headers: { Authorization: token },
  }
  const response  =await axios.delete(`${baseUrl}/${object.id}`,config)
  return response
}


export default { getAll, setToken, create, addlike,deleteBlog}