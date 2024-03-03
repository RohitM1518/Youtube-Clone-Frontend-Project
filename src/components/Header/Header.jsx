import React from 'react'
import Logo from '../../assets/logo.svg'
import sideBar from '../../assets/sidebar.svg'
import Search from '../../assets/search.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>  
            <header className=' bg-custom-gray-1 flex items-center h-14 w-full fixed z-10'>
                <NavLink  to='#sidebar'>
                <img src={sideBar} alt='sideBar' width={30} height={10} className='ml-4 hover:cursor-pointer mt-4'/>
                </NavLink>
                <Link to='/'>
                    <img src={Logo} alt="Logo" width={40} height={20} className=' ml-8 inline-block' />
                    <h1 className=' inline-block text-white font-extrabold font-mono text-2xl ml-2 mt-2'>YOUTUBE</h1>
                </Link>
                <nav className=''>
                    <input type="text" placeholder='Search' className='ml-80 w-[450px] h-[30px] rounded-l-xl bg-custom-gray-2 px-6 py-5 mt-2 text-white outline-none' />
                    <button className=' bg-custom-gray-2 text-white rounded-r-full h-[39px] px-7 '><img src={Search} alt="" width={15} height={40}/></button>
                </nav>
            </header>
        </>
    )
}

export default Header