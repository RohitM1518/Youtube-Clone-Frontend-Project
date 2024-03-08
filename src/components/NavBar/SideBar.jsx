import React, { children } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from "../../assets/home.svg"
import Tweet from "../../assets/tweet.svg"
import Dashboard from "../../assets/dashboard.svg"
import History from "../../assets/history.svg"
import Video from "../../assets/video.svg"
import Subscriptions from "../../assets/subscriptions.svg"
import Button from '../Button/Button'
import { Typography } from '@mui/material'

export const SideBar = () => {
    return (
        <>
            <nav id='sidebar' className='h-screen pr-5 fixed bg-custom-gray-1 z-10 collapse' >
                <div className=' pt-24'>
                    <ul className='ml-4 flex flex-col gap-5 opacity-80 '>
                        <li className=''>
                            <NavLink to='/'>
                                <Button text={'Home'} style={' text-white text-lg'} imgPath={Home} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/'>
                                <Button text={'Video'} style={' text-white text-lg'} imgPath={Video} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li className='/tweets'>
                            <NavLink>
                                <Button text={'Tweet'} style={' text-white text-lg'} imgPath={Tweet} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li className='/tweets'>
                            <NavLink>
                                <Button text={'Dashboard'} style={' text-white text-lg'} imgPath={Dashboard} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li className='/tweets'>
                            <NavLink>
                                <Button text={'Watch History'} style={' text-white text-lg'} imgPath={History} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <li className='/tweets'>
                            <NavLink>
                                <Button text={'Subscriptions'} style={' text-white text-lg'} imgPath={Subscriptions} imgHeight={25} imgWidth={25} />
                            </NavLink>
                        </li>
                        <div className=' h-0.5 opacity-25 bg-white mt-3' ></div>

                        <Typography align='center' className='copyright text-white' variant='body2' >
                            @2024 built by Rohit
                        </Typography>

                    </ul>
                </div>
            </nav>
        </>
    )
}
