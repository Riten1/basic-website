import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <>
    <div>We are a qualified and experienced developers</div>
    <NavLink to='contactus'>Contact Us</NavLink>
    <NavLink to='help'>Help</NavLink>
    <NavLink to='user/:id'>User</NavLink>
    <Outlet/>
    </>
  )
}

export default ContactLayout