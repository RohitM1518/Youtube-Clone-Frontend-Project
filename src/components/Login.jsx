import React from 'react';
import { Logo, Button, Input } from "../components/index.js";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const login = async (data, event) => {
        event.preventDefault();
        setError("");
        try {
            const userData = await axios.post("http://localhost:8000/api/v1/users/login", data);
            console.log("Logged in", userData);
            if(userData){
                navigate("/")
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className={`mx-auto w-full max-w-lg bg-custom-gray-2 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" textColor='text-black' />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white">Sign up to create an account</h2>
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
                <form onSubmit={handleSubmit(login)}>
                    <div className='space-y-5'>
                        <Input
                            label="Username:"
                            placeholder="Enter Username"
                            {...register("Username", {
                                required: "Username is required",
                                validate: {
                                    matchPattern: (value) => /^[^\s]+$/.test(value) || "Username should not contain Spaces",
                                }
                            })}
                        />
                        {errors.Username && <p className='text-red-500 text-center'>{errors.Username.message}</p>}
                        <h1 className='text-white font-bold text-center'>OR</h1>
                        <Input
                            label='Email:'
                            placeholder='Enter your Email'
                            type='email'
                            {...register("email", {
                                required: "Email is required",
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        {errors.email && <p className='text-red-500 text-center'>{errors.email.message}</p>}
                        <Input
                            label="Password"
                            placeholder="Enter Your Password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && <p className='text-red-500 text-center'>{errors.password.message}</p>}
                        <Button text="Login" type="submit" style='text-white' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
