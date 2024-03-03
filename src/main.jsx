import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route,  RouterProvider ,createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './Layout.jsx'
import {Home, VideoDetails,ChannelDetails} from './components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/videos/:id' element={<VideoDetails />}/>
      <Route path='/channel/:id' element={<ChannelDetails />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
