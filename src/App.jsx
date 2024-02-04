import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Hero from "./Components/Hero"
import About from "./Components/About/About"
import Service from "./Components/Servies/Service"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Hero/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path:"/service",
    element:<Service/>
  }
])


const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App