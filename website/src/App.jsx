import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutRoots from './layouts/LayoutRoots'
import Home from './pages/Home'
// import Aboutus from './pages/Aboutus'
import ContactUs from './pages/ContactUs'
import ContactLayout from './layouts/ContactLayout'
import Help from './pages/Help'
import Product from './pages/Product'
import User from './pages/User'
import Github from './pages/Github'
import Login from './pages/Login'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutRoots />}>
        <Route path='' element={<Home />}/>
        <Route path='product' element={<Product/>}/>
        <Route path='aboutus' element={<ContactLayout />}>
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='help' element={<Help/>}/>
          <Route path='user/:id' element={<User/>}/>
        </Route>
        <Route path='github' element={<Github/>}/>
        <Route path='login' element={<Login />}/>
       
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
