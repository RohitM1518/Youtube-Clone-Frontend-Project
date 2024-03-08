import React from 'react'
import sideBar from '../../assets/sidebar.svg'
import { Link, NavLink } from 'react-router-dom'
import {Button, SearchBar} from '../index.js'
import {Logo} from '../index.js'

const Header = () => {
    const handleOnClick=(event)=>{
        event.preventDefault()
        var sideBar=document.getElementById("sidebar")
        if(sideBar.style.visibility=='collapse'){
            sideBar.style.visibility='visible'
            return;
        }
        sideBar.style.visibility='collapse'
    }
    return (
        <>  
            <header className=' bg-custom-gray-1 flex items-center h-14 w-full fixed z-20 justify-between px-4'>
                <div className='flex gap-3 items-center'>
                <NavLink onClick={handleOnClick}>
                <img src={sideBar} alt='sideBar' width={30} height={10} className='ml-2 hover:cursor-pointer mt-4'/>
                </NavLink>
                <Link to='/'>
                    <Logo />
                </Link>
                </div>
                <div>
                <SearchBar />
                </div>
                <div className='flex gap-4'>
                    <Link to="/signup">
                    <Button text='SignUp' style='text-white'/>
                    </Link>
                    <Link  to="/login" >
                    <Button text='Login' fullStyle='bg-red-700 text-white'/>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header