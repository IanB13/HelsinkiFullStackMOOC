import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])  
 //checks for logged in user
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedinBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, []) 

  const logout = () =>{
    window.localStorage.removeItem('loggedinBlogUser')
    setUser(null)
  }

  if(user){
  return (
    <div>
      <h2>blogs</h2>
      <p>{user.name} is logged in <button onClick ={logout}> logout </button></p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
  }
  else{
    return(
      <LoginForm 
      username = {username} setUsername = {setUsername}
      password = {password} setPassword = {setPassword}
      user ={user} setUser = {setUser}
      />
    )

  }
}

export default App