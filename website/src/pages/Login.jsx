import React, { useState } from 'react'
import useUser from '../context/UserContext';


const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const {setUser} = useUser()

   function onSubmit(){
      setUser({userName, password})
  }

  return (
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='Username' value={userName} onChange={(e) => {setUsername(e.target.value)}}></input>
      <input type='text' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
      <button onClick={onSubmit}>Submit</button>

    </div>
  )
}

export default Login