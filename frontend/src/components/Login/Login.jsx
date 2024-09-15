import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (userId === 'user123@gmail.com' && password === 'password123') {
            navigate('/home');
        } else {
            setError('Invalid User ID or Password');
        }
    };

    return (
        <div className="bg-gradient-to-tr from-sky-950 from-40% via-blue-900 via-75% to-blue-800 to-90% h-screen ">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Fruit.ai"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="user123@gmail.com"
                                    value={userId}
                                    className="block w-full text-sm rounded-lg border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2.5"
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    placeholder="password123"
                                    value={password}
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2.5"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error && <p className="text-red-500 mb-4">{error}</p>}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-200">
                        Don't have account?{' '}
                        <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>

    );
}
