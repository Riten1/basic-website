import React from 'react'
import useUser from '../context/UserContext'

const Home = () => {
  const {user} = useUser()

  if(!user.userName || !user.password) return <div>Please Login</div>
  else return <div>Welcome {user.userName}</div>
  
}

export default Home