import React from 'react'
import useUser from '../context/UserContext'

const Home = () => {
  const {user} = useUser()

  if(!user.userName || !user.password) return <div className='h-screen w-full text-center'>Please Login</div>
  else return <div className='h-screen w-full text-center' >Welcome {user.userName}</div>
  
}

export default Home