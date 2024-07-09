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
        try {
            const response = await axios.post('/api/v1/auth/signup', data, {
                withCredentials: true,
            })
            if (response.error) {
                toast.error(response.error)
            } else {
                setData({})
                toast.success(
                    `Welcome, rookie! You've successfully logged in. Let's keep Los Santos in check!`,
                    {
                        className:
                            'bg-[var(--bg1l)] p-8 text-[var(--lblue)] rounded-lg shadow-md w-[25%]',
                    },
                )
                navigate('/login')
            }
        } catch (err) {
            console.log(err)
            toast.error(
                `Uh-oh, registration hit a snag! Give it another shot, rookie. The LSPD is waiting for you!`,
                {
                    className:
                        'bg-[var(--lblue)] mx-4 poppins pricedown font-medium text-[var(--bg1)] rounded-lg shadow-md',
                },
            )
        }
    }

    return (
        <div className="flex poppins items-center justify-center drop-shadow-2xl h-screen bg-[var(--bg2)] bgpattern">
            <div className="bg-[var(--bg1l)] p-8 text-[var(--lblue)] rounded-lg shadow-md w-[25%]">
                <h2 className="text-5xl pricedown text-[var(--lgold)] font-bold mb-6 text-center">
                    Register
                </h2>
                <form onSubmit={registerUser}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 rounded-lg bg-[var(--bg1)] text-[var(--ltext)]"
                            value={data.name}
                            onChange={(e) =>
                                setData({...data, name: e.target.value})
                            }
                        />
                    </div>
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
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link
                        to="/login"
                        className="text-[var(--lblue)] hover:text-[var(--lgold)]"
                    >
                        Already have an account? Login Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
