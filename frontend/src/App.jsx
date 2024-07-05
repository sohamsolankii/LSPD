import React from 'react'
import axios from 'axios'
import {Outlet, useLocation} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import Navbar from './components/Header/Navbar.jsx'
import {UserContextProvider} from './context/userContext.jsx'
import Starter from './components/Starter.jsx'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

const App = () => {
    const {pathname} = useLocation()

    const hideNavbarPaths = ['/login', '/register']
    const shouldHideNavbar = hideNavbarPaths.includes(pathname)

    return (
        <UserContextProvider>
            {!shouldHideNavbar && <Navbar />}
            <Toaster position="top-right" toastOptions={{duration: 2000}} />
            <Outlet />
        </UserContextProvider>
    )
}

export default App
