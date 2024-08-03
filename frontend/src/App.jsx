import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Outlet, useLocation} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Header/Navbar.jsx'
import {UserContextProvider} from './context/userContext.jsx'
import ChatbotContainer from './components/chatbot/ChatbotContainer'
import Starter2 from './components/Starter2.jsx'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

const App = () => {
    const {pathname} = useLocation()
    const [hasEntered, setHasEntered] = useState(false)

    // useEffect(() => {
    //     if (hasEntered) {
    //         document.body.style.overflow = 'auto'
    //     } else {
    //         document.body.style.overflow = 'hidden'
    //     }
    // }, [hasEntered])

    const hideNavbarPaths = [
        '/login',
        '/register',
        '/admin-login',
        '/forgot-password',
        '/reset',
    ]
    // const shouldHideNavbar = hideNavbarPaths.includes(pathname)
	const shouldHideNavbar = hideNavbarPaths.includes(pathname) || !hasEntered

    const handleEnter = () => {
        setHasEntered(true)
    }

    return (
        <UserContextProvider>
            {!hasEntered && <Starter2 onEnter={handleEnter} />}
            {!shouldHideNavbar && <Navbar />}
            <Toaster position="top-right" toastOptions={{duration: 2000}} />
            <Outlet />
            <ChatbotContainer />
        </UserContextProvider>
    )
}

export default App
