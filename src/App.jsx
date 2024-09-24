import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import Create from './Component/Create'
import Edit from './Component/Edit'
import PageNotFound from './Component/PageNotFound'
import Read from './Component/Read'


let routes=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/create",
    element:<Create/>
  },
  {
    path:"/Edit/:id",
    element:<Edit/>
  },
  {
    path:"/*",
    element:<PageNotFound/>
  },
  {
    path:"/read",
    element:<Read/>
  }
])
const App = () => {
  return (
   <RouterProvider router={routes}/>
  )
}

export default App