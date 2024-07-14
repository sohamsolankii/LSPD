import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

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
                        'bg-[var(--opac)] mx-4 poppins pricedown font-medium text-[#94a3b8] rounded-lg shadow-md rounded-2xl backdrop-blur-sm border-1 border-[#475569] w-[80%] md:w-[60%] lg:w-[25%]',
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
                            'bg-[var(--opac)] mx-4 poppins pricedown font-medium text-[#94a3b8] rounded-lg shadow-md rounded-2xl backdrop-blur-sm border-1 border-[#475569] w-[80%] md:w-[60%] lg:w-[25%]',
                    },
                )
            }
            console.log(err)
        }
    }

    return (
        <div
            className="poppins relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/formbg3.jpeg')" }}
        >            
         <div className="absolute inset-0 bg-[var(--bg2)] opacity-80"></div>
            <div className="bg-[var(--bg3op)] relative z-10 p-8 text-[var(--lblue)] glassgrad rounded-2xl backdrop-blur-md border-2 border-[#475569] transition ease-in-out delay-300 hover:backdrop-blur-2xl shadow-black/70 shadow-2xl w-[90%] md:w-[70%] lg:w-[25%]">
                <h2 className="text-3xl lg:text-5xl pricedown text-[var(--lgold)] font-bold mb-6 text-center">
                    Login
                </h2>
                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-lg bg-[var(--opac)] backdrop-blur-sm text-[var(--ltext)]"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 rounded-lg bg-[var(--opac)] backdrop-blur-sm text-[var(--ltext)]"
                            value={data.password}
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 mt-8 bg-[var(--lblue)] glassgrad2 shadow-black/70 shadow-2xl backdrop-blur-sm font-medium text-[var(--ltext)] hover:text-[var(--bg2)] rounded-lg hover:bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"
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
            {/* <img src="/src/assets/formbg.webp"
                className="w-full md:rounded-md rounded-sm shadow-sm object-cover"
                                /> */}
        </div>
    )
}

export default Login
