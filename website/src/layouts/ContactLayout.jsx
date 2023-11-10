import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <>
    <div className='text-center'>We are a qualified and experienced developers</div>
    <div className='flex justify-center items-center gap-4'>
    <NavLink to='contactus'>Contact Us</NavLink>
    <NavLink to='help'>Help</NavLink>
    <NavLink to='user/:id'>User</NavLink>
   
    </div>
    <Outlet/>
    </>
  )
}

export default ContactLayout