import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from './Layout.jsx'
import { Home, VideoDetails, ChannelDetails, Login, SignUp,ChannelVideos } from './components/index.js'
import { ChannelPlaylist,ChannelTweets } from './pages/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/video/:id' element={<VideoDetails />} />
      <Route path='/channel/:id/videos/' element={<ChannelVideos/>} />
      <Route path='/channel/:id/playlists/' element={<ChannelPlaylist />} />
      <Route path='/channel/:id/tweets/' element={<ChannelTweets />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
