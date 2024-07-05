import React from 'react'
import Navbar from './Header/Navbar'
// import Dashboard from './Header/Dashboard'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Dashboard />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
