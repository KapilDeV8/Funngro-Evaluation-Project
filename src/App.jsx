import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Body from "./Components/Body"
function App() {
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/",
      element: <Body />
    }
  ])
  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
