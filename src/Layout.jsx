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
            <div className='p-20 bg-custom-gray-1 w-full h-screen max-sm:p-3 max-lg:p-7 max-sm:pt-20 max-lg:pt-20' >
                <Outlet />
            </div>

        </>
    )
}

export default Layout