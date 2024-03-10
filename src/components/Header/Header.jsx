import React, { useState } from 'react'
import openSidebar from '../../assets/openSidebar.svg'
import closeSidebar from '../../assets/closeSidebar.svg'
import { Link, NavLink } from 'react-router-dom'
import { Button, SearchBar, Avatar } from '../index.js'
import { Logo } from '../index.js'
import { useSelector } from 'react-redux'



const Header = () => {
    const [logo, setLogo] = useState(false)
    const currentUser = useSelector(state => state.user.currentUser)


    const handleOnClick = (event) => {
        event.preventDefault()
        var sideBar = document.getElementById("sidebar")
        if (sideBar.style.visibility == 'collapse') {
            sideBar.style.visibility = 'visible'
            setLogo(true)
            return;
        }
        sideBar.style.visibility = 'collapse'
        setLogo(false)
    }
    return (
        <>
            <header className=' bg-custom-gray-1 flex items-center h-14 w-full fixed z-20 justify-between px-4'>
                <div className='flex gap-3 items-center'>
                    <NavLink onClick={handleOnClick}>
                        <img src={logo ? openSidebar : closeSidebar} alt='sideBar' width={30} height={10} className='ml-2 hover:cursor-pointer mt-4' />
                    </NavLink>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                <div>
                    <SearchBar />
                </div>
                {currentUser ?
                    <div className=" flex items-center gap-2">
                    <Link to={`/channel/${currentUser._id}/videos`} className=' flex gap-2 items-center p-1 rounded-lg'>
                    <Avatar src={currentUser.avatar} />
                    <h1 className=' text-white'>{currentUser.fullname}</h1>
                    </Link>
                    </div>
                    : <div className='flex gap-4'>
                        <Link to="/signup">
                            <Button text='SignUp' style='text-white' />
                        </Link>
                        <Link to="/login" >
                            <Button text='Login' fullStyle='bg-red-700 text-white' />
                        </Link>
                    </div>}
            </header>
        </>
    )
}

export default Header