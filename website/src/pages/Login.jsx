import React, { useState } from 'react'

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='Username' value={userName} onChange={(e) => {setUsername(e.target.value)}}></input>
      <input type='text' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
      <button></button>

    </div>
  )
}

export default Login