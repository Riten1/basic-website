import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const LayoutRoots = () => {
  return (
    <header>
      <nav>
        <NavLink className={(isActive) => {isActive ? 'text-red-700' : `text-black`}} to='/'>Home</NavLink>
        <NavLink className={(isActive) => {isActive ? 'text-red-700' : `text-black`}} to='aboutus'>About Us</NavLink>
      </nav>
      <Outlet />
    </header>
  )
}

export default LayoutRoots