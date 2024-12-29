import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email is ", email);
        console.log("password is ", password);
        setEmail(" ")
        setPassword("")

    }



    return (
        <div className='h-screen w-screen flex justify-center items-center bg-black'>
            <div className='border border-red-200 px-4 py-6 rounded-lg'>
                <form className='flex flex-col items-center justify-center gap-10 '>
                    <input required
                        className='border-2 border-emerald-600 rounded-full px-2 py-2 placeholder:text-gray-400'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);

                        }}
                        type="email" placeholder="Enter your email" />
                    <input required
                        className='border-2 border-emerald-600 rounded-full px-2 py-2 placeholder:text-gray-400'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);

                        }}
                        type="password" placeholder="Password" />
                    <button onClick={(e) => { submitHandler(e) }}
                        className='bg-emerald-600 text-white rounded-full px-4 py-2'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login  
