import React, { children } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from "../../assets/home.svg"
import Tweet from "../../assets/tweet.svg"
import Dashboard from "../../assets/dashboard.svg"
import History from "../../assets/history.svg"
import Video from "../../assets/video.svg"
import Subscriptions from "../../assets/subscriptions.svg"
import Button from '../Button/Button'

export const SideBar = () => {
  return (
    <>
    <nav id='sidebar' className=' bg-custom-gray-1 w-1/6 h-screen fixed pr-5'>
        <div className=' pt-24 '>
        <ul className=' ml-6 flex flex-col gap-5 opacity-80'>
            <li className=''>
                <NavLink to='/'>
                    <Button text={'Home'} style={' text-white text-lg'} imgPath={Home} imgHeight={25} imgWidth={25}/>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to='/'>
                    <Button text={'Video'} style={' text-white text-lg'} imgPath={Video} imgHeight={25} imgWidth={25}/>
                </NavLink>
            </li>
            <li className='/tweets'>
                <NavLink>
                <Button text={'Tweet'} style={' text-white text-lg'} imgPath={Tweet} imgHeight={25} imgWidth={25}/>
                </NavLink>
            </li>
            <li className='/tweets'>
                <NavLink>
                <Button text={'Dashboard'} style={' text-white text-lg'} imgPath={Dashboard} imgHeight={25} imgWidth={25}/>
                </NavLink>
            </li>
            <li className='/tweets'>
                <NavLink>
                <Button text={'Watch History'} style={' text-white text-lg'} imgPath={History} imgHeight={25} imgWidth={25}/>
                </NavLink>
            </li>
            <li className='/tweets'>
                <NavLink>
                <Button text={'Subscriptions'} style={' text-white text-lg'} imgPath={Subscriptions} imgHeight={25} imgWidth={25}/>
                </NavLink>
            </li>
            <div className=' h-0.5 opacity-25 bg-white mt-3' ></div>
            <li className=' text-white text-center'>@2024 built by Rohit</li>
        </ul>
        </div>
    </nav>
    </>
  )
}
