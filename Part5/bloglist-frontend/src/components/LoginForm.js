import React,{useState} from 'react'
import loginService from '../services/login'

const LoginForm =({setUser,setMessage}) =>{
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')

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
      setMessage('Wrong credentials')
      console.log('Wrong credentials')
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