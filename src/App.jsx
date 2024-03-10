import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { SideBar } from './components/SideBar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from './redux/userSlice'

const App = () => {
  const refreshToken = sessionStorage.getItem('refreshToken')
  const dispatch = useDispatch()
  if (refreshToken) {
    ;(async function () {
      try {
        dispatch(loginStart())
        const res = await axios.post('http://localhost:8000/api/v1/users/refresh-token',{refreshToken:refreshToken})

        sessionStorage.setItem('refreshToken',res.data.data.refreshToken)
        dispatch(loginSuccess(res.data.data))
      } catch (error) {
        dispatch(loginFailure())
        throw error
      }
      
    })();
  }
  return (
    <>
      <Header />
      <SideBar />
      <div className='p-20 bg-custom-gray-1 w-full h-screen max-sm:p-3 max-lg:p-7 max-sm:pt-20 max-lg:pt-20' >
        <Outlet />
      </div>

    </>
  )
}

export default App