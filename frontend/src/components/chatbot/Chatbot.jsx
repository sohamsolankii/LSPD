import React, {useState} from 'react'
import axios from 'axios'

const Chatbot = () => {
    const [userInput, setUserInput] = useState('')
    const [chatHistory, setChatHistory] = useState([])
    const [loading, setLoading] = useState(false)

    const sendMessage = async (event) => {
        event.preventDefault()
        if (!userInput.trim()) return

        const newChatHistory = [
            ...chatHistory,
            {user: 'You', message: userInput},
        ]
        setChatHistory(newChatHistory)
        setUserInput('')
        setLoading(true)

        try {
            const response = await axios.post('/api/v1/chat', {userInput})
            setChatHistory([
                ...newChatHistory,
                {user: 'Trevor Salamanca', message: response.data.response},
            ])
        } catch (error) {
            console.error('Error:', error)
            setChatHistory([
                ...newChatHistory,
                {
                    user: 'System',
                    message: 'Error sending message. Please try again later.',
                },
            ])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    LSPD Eagle Eye Chat
                </h1>
                <div className="overflow-y-auto h-96 mb-4">
                    {chatHistory.map((chat, index) => (
                        <div
                            key={index}
                            className={`mb-2 ${chat.user === 'You' ? 'text-right' : 'text-left'}`}
                        >
                            <div
                                className={`inline-block p-2 rounded-lg ${chat.user === 'You' ? 'bg-gray-300' : 'bg-green-200'}`}
                            >
                                <strong>{chat.user}: </strong>
                                {chat.message}
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={sendMessage} className="flex">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="flex-grow border border-gray-300 p-2 rounded-l-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your message"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-r-lg"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
                {loading && <div className="text-center mt-4">Loading...</div>}
            </div>
        </div>
    )
}

export default Chatbot
