import React, { useState } from 'react'
import { Button, Input } from '../components'
import { set, useForm } from "react-hook-form"
import axios from 'axios'
import { useSelector } from 'react-redux'

const ManageProfile = () => {
    const [passwordActive, setPasswordActive] = useState(true)
    const [updateAccountActive, setUpdateAccountActive] = useState(false)
    const [avatarActive, setAvatarActive] = useState(false)
    const [coverImageActive, SetCoverImageActive] = useState(false)
    const [error, setError] = useState("")
    
    const accessToken = useSelector(state => state.user.accessToken)

    const { register, handleSubmit } = useForm()
    const updatePassword = async (data, event) => {
        event.preventDefault();
        setError("")
        try {
            if (data.newPassword != data.confirmPassword) {
                setError("Password and Confirm Password do not match.")
                return;
            }

            await axios.post('http://localhost:8000/api/v1/users/change-password', data,
                {
                    withCredentials: true,
                    headers: {
                        'Authorization': `Bearer ${accessToken}` // Corrected template literal syntax
                    }
                })
            alert("Your password has been updated successfully!")
        } catch (error) {
            console.log(error.response.status)
            if(parseInt(error.response.status,10)==400){
                setError("Invalid Old Password")
            }else{

                setError(error.message)
            }
        }
    }
    return (
        <div className=' flex gap-24 items-center justify-center'>

            <div>
                <form onSubmit={handleSubmit(updatePassword)}>
                    <div className=' flex flex-col gap-8'>
                        <Input
                            label="Old Password:"
                            placeholder="Enter Your Old Password"
                            {...register("oldPassword", {
                                required: true,
                            })}
                        />
                        <Input
                            label="New Password:"
                            placeholder="Enter New Password"
                            {...register("newPassword", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Confirm Password:"
                            placeholder="Enter Confirm Password"
                            {...register("confirmPassword", {
                                required: true,
                            })}
                        />
                        <p className=' text-red-600'>{error && error}</p>
                        <Button text={'update'} />
                    </div>
                </form>
            </div>
            <div className='text-white flex gap-5 flex-col float-left'>
                <div className={`${passwordActive ? ' text-blue-600' : ''} hover:cursor-pointer`}>
                    Change Password
                </div>
                <div>
                    Update Account
                </div>
                <div>
                    Update Avtar
                </div>
                <div>
                    Update Cover Image
                </div>
            </div>
        </div>
    )
}

export default ManageProfile