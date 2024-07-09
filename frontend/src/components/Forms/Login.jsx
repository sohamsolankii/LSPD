import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        // Handle login logic here

        try {
            const response = await axios.post('/api/v1/auth/login', data, {
                withCredentials: true,
            })
            const responseData = response.data // get data from the response
            if (responseData.error) {
                toast.error(responseData.error)
            } else {
                setData({
                    email: '',
                    password: '',
                })
                toast.success(
                    `Welcome, rookie! You've successfully logged in. Let's keep Los Santos in check!`,
                    {
                        className:
                            'bg-[var(--bg1l)] p-8 text-[var(--lblue)] rounded-lg shadow-md w-[25%]',
                    },
                )
                navigate('/')
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                toast.error(err.response.data.error) // Show specific error message from server
            } else {
                toast.error(
                    `Busted! Something went sideways. Please try again, Dear NPC.`,
                    {
                        className:
                            'bg-[var(--lblue)] mx-4 poppins pricedown font-medium text-[var(--bg1)] rounded-lg shadow-md',
                    },
                )
            }
            console.log(err)
        }
    }

    return (
        <div className="flex poppins items-center justify-center drop-shadow-2xl h-screen bg-[var(--bg2)] bgpattern">
            <div className="bg-[var(--bg1l)] p-8 text-[var(--lblue)] rounded-lg shadow-md w-[25%]">
                <h2 className="text-5xl pricedown text-[var(--lgold)] font-bold mb-6 text-center">
                    Login
                </h2>
                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-lg bg-[var(--bg1)] text-[var(--ltext)]"
                            value={data.email}
                            onChange={(e) =>
                                setData({...data, email: e.target.value})
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 rounded-lg bg-[var(--bg1)] text-[var(--ltext)]"
                            value={data.password}
                            onChange={(e) =>
                                setData({...data, password: e.target.value})
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 mt-8 bg-[var(--lblue)] font-medium text-[var(--bg2)] rounded-lg hover:bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link
                        to="/register"
                        className="text-[var(--lblue)] hover:text-[var(--lgold)]"
                    >
                        Create new account
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
