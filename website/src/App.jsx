import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutRoots from './layouts/LayoutRoots'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutRoots />}>
        <Route path='/' element={<Home />}/>
      <Route path='aboutus' element={<Aboutus />}/>
      </Route>
    )
  )

  return (
    <>
    
    {/*  */}
    {/* <Routes>
      

    </Routes> */}
    <RouterProvider router={router} />
    </>
  )
}

export default App
