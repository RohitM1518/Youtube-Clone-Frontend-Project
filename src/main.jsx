import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Home, AuthLayout, Login, SignUp, ChannelVideos } from './components/index.js'
import { ChannelPlaylist, ChannelTweets, Dashboard, ManageTweets, WatchHistory, ManageVideos, Subscriptions, Video } from './pages/index.js'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={
        <AuthLayout authentication={false}>
          <Home />
        </AuthLayout>
      } />
      <Route path='/video/:videoId' element={
        <AuthLayout authentication={true}>
          <Video />
        </AuthLayout>
      } />
      <Route path='/channel/:id/videos/' element={
        <AuthLayout authentication={false}>
          <ChannelVideos />
        </AuthLayout>
      } />
      <Route path='/channel/:id/playlists/' element={
        <AuthLayout authentication={false}>
          <ChannelPlaylist />
        </AuthLayout>
      } />
      <Route path='/channel/:id/tweets/' element={
        <AuthLayout authentication={false}>
          <ChannelTweets />
        </AuthLayout>
      } />
      <Route path='/login' element={
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      } />
      <Route path='/signup' element={
        <AuthLayout authentication={false}>
          <SignUp />
        </AuthLayout>
      } />

      <Route path='/manage-videos' element={
        <AuthLayout authentication={true}>
          <ManageVideos />
        </AuthLayout>
      } />

      <Route path='/manage-tweets' element={
        <AuthLayout authentication={true}>
          <ManageTweets />
        </AuthLayout>
      } />

      <Route path='/dashboard' element={
        <AuthLayout authentication={true}>
          <Dashboard />
        </AuthLayout>
      } />

      <Route path='/watch-history' element={
        <AuthLayout authentication={true}>
          <WatchHistory />
        </AuthLayout>
      } />

      <Route path='/subscriptions' element={
        <AuthLayout authentication={true}>
          <Subscriptions />
        </AuthLayout>
      } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
