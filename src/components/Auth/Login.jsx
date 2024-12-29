import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Correct import
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is imported

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("email is ", email);
        console.log("password is ", password);

        // Show a success toast notification
        toast.success('Logged in successfully!');

        // Reset input fields
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="bg-zinc-700 p-10 rounded-md flex flex-col gap-4"
                onSubmit={submitHandler}
            >
                <input
                    value={email}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered input-secondary w-full max-w-xs"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    value={password}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered input-secondary w-full max-w-xs"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-outline btn-secondary">
                    Login
                </button>
            </form>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default Login;
