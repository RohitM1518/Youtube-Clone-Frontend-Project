import React, { children } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from "../assets/home.svg"
import Tweet from "../assets/tweet.svg"
import Dashboard from "../assets/dashboard.svg"
import History from "../assets/history.svg"
import Video from "../assets/video.svg"
import Subscriptions from "../assets/subscriptions.svg"
import Button from './Button/Button'
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import profileLogo from '../assets/profile.svg'
import axios from 'axios'
import { logout } from '../redux/userSlice'
import Logout from './Logout'

export const SideBar = () => {
    const userid = useSelector(state => state.user?.currentUser?._id)
    const accessToken = useSelector(state => state.user?.accessToken)
    const dispatch = useDispatch()

    const handleLogout = async (event) => {
        event.preventDefault()
        try {
            await axios.post(`http://localhost:8000/api/v1/users/logout`, null, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${accessToken}` 
                }
            }); 
            sessionStorage.removeItem('refreshToken')
            dispatch(logout())
            window.location.reload()
            navigate('/')

        } catch (error) {
            throw error
        }

    }

    return (
        <>
            <nav id='sidebar' className='h-screen pr-5 fixed bg-custom-gray-1 z-10 collapse' >
                <div className=' pt-24'>
                    <ul className='ml-4 flex flex-col gap-5 opacity-80 '>
                        <li>
                            <NavLink to='/'>
                                <Button text={'Home'} style={' text-white text-lg'} imgPath={Home} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/manage-videos'>
                                <Button text={'Manage Videos'} style={' text-white text-lg'} imgPath={Video} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/manage-tweets'>
                                <Button text={'Manage Tweets'} style={' text-white text-lg'} imgPath={Tweet} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                                <Button text={'Dashboard'} style={' text-white text-lg'} imgPath={Dashboard} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/watch-history'>
                                <Button text={'Watch History'} style={' text-white text-lg'} imgPath={History} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/subscriptions'>
                                <Button text={'Subscriptions'} style={' text-white text-lg'} imgPath={Subscriptions} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <div className=' h-0.5 opacity-25 bg-white mt-3' ></div>

                        {userid && <div className=' flex justify-center'>
                        <Logout />
                        </div>}
                        {userid && <Link className=' flex justify-center' to={`/user/${userid}`}>
                        <Button text={"Edit Profile"}/>
                        </Link>}
                        <Typography align='center' className='copyright text-white' variant='body2' >
                            @2024 built by Rohit
                        </Typography>
                    </ul>
                </div>
            </nav>
        </>
    )
}
