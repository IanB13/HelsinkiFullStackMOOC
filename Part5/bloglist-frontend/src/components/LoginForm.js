import React from 'react'
import loginService from '../services/login'

const LoginForm =({username,setUsername,password,setPassword,user,setUser}) =>{
  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in',username,password)
    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
      window.localStorage.setItem(
        'loggedinBlogUser', JSON.stringify(user)
      ) 
    } catch (exception) {
      //setErrorMessage('Wrong credentials')
      console.log('Wrong credentials')
      setTimeout(() => {
        //setErrorMessage(null)
      }, 5000)
    }
  }
  
return(
    <form onSubmit={handleLogin}>
    <div>
      username
        <input
        type="text"
        value={username}
        name="Username"
        onChange={({ target }) => setUsername(target.value)}
      />
    </div>
    <div>
      password
        <input
        type="password"
        value={password}
        name="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
    </div>
    <button type="submit">login</button>
  </form>


)
}

export default LoginForm