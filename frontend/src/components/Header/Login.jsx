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
        const {email, password} = data
        try {
            const response = await axios.post('/login', {
                email,
                password,
            })
            const data = response.data // get data from the response
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Login successful. Welcome!')
                navigate('/dashboard')
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                toast.error(err.response.data.error) // Show specific error message from server
            } else {
                toast.error('An error occurred. Please try again.')
            }
            console.log(err)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Login
                </h2>
                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded bg-gray-700 text-white"
                            value={data.email}
                            onChange={(e) =>
                                setData({...data, email: e.target.value})
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 rounded bg-gray-700 text-white"
                            value={data.password}
                            onChange={(e) =>
                                setData({...data, password: e.target.value})
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link
                        to="/register"
                        className="text-blue-400 hover:underline"
                    >
                        Create new account
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
