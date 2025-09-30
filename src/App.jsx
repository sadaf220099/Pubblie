import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from "./pages/home"
const router =createBrowserRouter (
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<Home/>
    }
  ]
)




const App =() => {
  

  return (
   

    <RouterProvider router={router}/>
  )
}

export default App
