import { Try } from '@mui/icons-material'
import React, { useState } from 'react'
import { set, useForm } from "react-hook-form"
import {Logo,Button,Input} from "../components/index.js"
import { Link } from 'react-router-dom'


const SignUp = () => {
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    const create = async (data,event) => {
        event.preventDefault();
        console.log("Data is",data)
        setError("")
        try {
            if(data.password != data.confirmPassword){
                setError("Password and Confirm Password do not match.")
                return;
            }
            setError("Loged in")
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className={`mx-auto w-full max-w-lg bg-custom-gray-2 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" textColor='text-black' />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-white/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Log In
                    </Link>
                </p>
                {error && <p className='text-red-500 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name:"
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Username:"
                            placeholder="Enter Username"
                            {...register("Username", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^[^\s]+$/.test(value) ||
                                        "Username should not contain Spaces",
                                    //above not understanding code is called as RegEx(Regular Expression)
                                }
                            })}
                        />
                        <Input label='Email:' placeholder='Enter your Email'
                            type='email'
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",

                                    //above not understanding code is called as RegEx(Regular Expression)
                                }
                            })
                            } />
                        <Input label='Avatar:' placeholder='Enter your Email'
                            type='file' accept="image/*"
                            {...register("avatar", {
                                required: true,
                            })
                            } />
                        <Input label='Cover Image:' placeholder='Enter your Email'
                            type='file' accept="image/*"
                            {...register("coverImage", {
                                required: true,
                            })
                            } />
                        <Input
                            label="Password"
                            placeholder="Enter Your Password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Confirm Password"
                            placeholder="Enter Confirm Password"
                            type="password"
                            {...register("confirmPassword", {
                                required: true,
                            })}
                        />
                        <Button text="Sign up" style='text-white' type='submit'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp