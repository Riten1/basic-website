import React, { useState } from 'react'
import useUser from '../context/UserContext';


const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const {setUser} = useUser()

   function onSubmit(){
      setUser({userName, password})
      setUsername('')
      setPassword('')
      submit=true
  }
let submit = false
  return (
    <div className='text-center'>
      <h1>Login</h1>
      <input className='border-2 rounded-sm' type='text' placeholder='Username' value={userName} onChange={(e) => {setUsername(e.target.value)}}></input>
      <input className='border-2 rounded-sm' type='text' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
      <button onClick={onSubmit}>{submit?'Submitted': 'Submit'}</button>

    </div>
  )
}

export default Login