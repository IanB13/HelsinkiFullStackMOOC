import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import NewBlogForm from './components/NewBlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [reloadBlogs,triggerBlogReload] =useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [reloadBlogs])  

  useEffect(()=>{
    setMessage(message)
    console.log(`message set to ${message}`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  },[message])

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
      {message}
      <div>
      <h2>blogs</h2>
      <p>{user.name} is logged in <button onClick ={logout}> logout </button></p>
      <NewBlogForm user={user} triggerBlogReload={triggerBlogReload}
       setMessage ={setMessage}/>
      </div>

      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} triggerBlogReload={triggerBlogReload} />
      )}
    </div>
  )
  }
  else{
    return(
      <>
      {message}
      <LoginForm 
      user ={user} setUser = {setUser}
      setMessage ={setMessage}
      />
      </>
    )

  }
}

export default App