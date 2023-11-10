import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { UserContextProvider } from '../context/UserContext'
import { useState } from 'react'

const LayoutRoots = () => {
  const [user, setUser] = useState({})
  return (
    <UserContextProvider value={{user, setUser}}>
    <header>
      <nav>
        <NavLink className={({isActive}) => {isActive ? 'text-red-700' : `text-black`}} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => {isActive ? 'text-red-700' : `text-black`}} to='product'>Products</NavLink>
        <NavLink className={({isActive}) => {isActive ? 'text-red-700' : `text-black`}} to='aboutus'>About Us</NavLink>
        <NavLink to='github'>GitHub</NavLink>
        <NavLink to='login'>Login</NavLink>

      </nav>
      <Outlet />
    </header>
    </UserContextProvider>
  )
}

export default LayoutRoots