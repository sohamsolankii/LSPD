import React, {useEffect, useState} from 'react'
import axios from 'axios'

const AdminShowTip = () => {
    const [tips, setTips] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTips = async () => {
            try {
                const response = await axios.get('/api/v1/tip', {
                    withCredentials: true,
                })
                if (response.data && response.data.data) {
                    setTips(response.data.data)
                } else {
                    setError('Invalid response format')
                }
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }

        fetchTips()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="bg-[var(--bg2)] poppins dark:bg-[var(--dbg2)] p-3 md:p-7 min-h-screen flex items-center justify-center bgp">
            <div className="container bg-[var(--bg1)] dark:bg-[var(--dbg1)] mx-auto p-3 md:p-10 rounded-2xl shadow-black/70 border-[1px] border-[var(--opac)] shadow-2xl">
                <h1 className="text-2xl md:text-4xl pricedown font-bold text-[var(--lgold)] dark:text-[var(--dlgold)] mb-2 text-center">
                    All Tips
                </h1>
                <h2 className="text-sm md:text-xl poppins text-[var(--ltext)] dark:text-[var(--dltext)] mb-8 text-center">
                    Submitted by Users
                </h2>
                <div className="tips-list">
                    {tips.length === 0 ? (
                        <p className="text-center text-[var(--ltext)] dark:text-[var(--dltext)]">
                            No tips available
                        </p>
                    ) : (
                        tips.map((tip, index) => (
                            <div
                                key={index}
                                className="mb-4 p-3 rounded-xl glassgrad2 border-[1px] border-[var(--opac)] shadow-black/20 shadow-lg backdrop-blur-sm dark:border-gray-700 bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] text-[var(--ltext)] dark:text-[var(--dlblue)]"
                            >
                                <p>
                                    <strong>Tip:</strong> {tip.tip}
                                </p>
                                <p>
                                    <strong>User Name:</strong>{' '}
                                    {tip.user ? tip.user.name: 'Anonymous'}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdminShowTip
