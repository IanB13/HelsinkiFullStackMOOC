import React,{ useState } from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'

const LoginForm =({ setUser,setMessage }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      setUsername('')
      setPassword('')
      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem(
        'loggedinBlogUser', JSON.stringify(user)
      )
    } catch (exception) {
      setMessage('Wrong credentials')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          id = "usernameInput"
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          id = "passwordInput"
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id ='loginButton' type="submit">login</button>
    </form>
  )
}

export default LoginForm