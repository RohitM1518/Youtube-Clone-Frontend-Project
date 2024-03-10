import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userSlice'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from './index.js'
import logoutLogo from '../assets/logout.svg'
import axios from 'axios'


const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = useSelector(state => state.user.accessToken)

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
        <Link onClick={handleLogout}>
            <Button text="Logout" imgPath={logoutLogo} />
        </Link>
    )
}

export default Logout