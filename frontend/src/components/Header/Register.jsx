import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault()
        // Handle registration logic here
        const {name, email, password} = data
        try {
            const {data} = await axios.post('/api/v1/auth/signUp', {
                name,
                email,
                password,
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Login sucessful. Welcome!')
                navigate('/login')
            }
        } catch (err) {
            console.log(err)
            toast.error('Registration failed, please try again')
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Register
                </h2>
                <form onSubmit={registerUser}>
                    <div className="mb-4">
                        <label className="block text-white mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 rounded bg-gray-700 text-white"
                            value={data.name}
                            onChange={(e) =>
                                setData({...data, name: e.target.value})
                            }
                        />
                    </div>
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
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/login" className="text-blue-400 hover:underline">
                        Already have an account? Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
