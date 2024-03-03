import React from 'react'
import { Outlet } from 'react-router-dom'
import App from './App'
import Header from './components/Header/Header'
import { SideBar } from './components/NavBar/SideBar'

const Layout = () => {
    return (
        <> 
        <Header />
        <SideBar />
        <div className=' flex ml-64 pt-16'>
        <Outlet />
        </div>
        </>
    )
}

export default Layout