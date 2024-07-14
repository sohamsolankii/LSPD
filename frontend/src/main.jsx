import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Dashboard from './Header/Dashboard'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    createRoutesFromElements,
} from 'react-router-dom'
import Login from './components/Forms/Login.jsx'
import Register from './components/Forms/Register.jsx'
import Starter from './components/Starter.jsx'
import Dashboard from './components/Dashboard.jsx'
import WantedList from './components/WantedList.jsx'
import News from './components/Pages/news/News.jsx'
import Careers from './components/Pages/career/Careers.jsx'
import JobDetails from './components/Pages/career/JobDetails.jsx'
import AdminJobDetails from './components/admin/AdminJobDetails.jsx'
import Footer from './components/Footer/Footer.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route
                path="/"
                element={
                    <>
                        <Starter />
                        <Dashboard />
                        <WantedList />
                        {/* <AdminJobDetails /> */}
						<Footer/>
                    </>
                }
            />
            <Route path="/login" element={<Login />} />,
            <Route path="/register" element={<Register />} />
            <Route path="/news" element={<News />} />,
            <Route
                path="/career"
                element={
                    <>
                        <Careers />
                        <JobDetails />
                    </>
                }
            />
            {/* ,<Route path="/admin" element={<AdminDashboard />}></Route> */}
        </Route>,
    ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

// this is for the learning perpose
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: (
//             <Navbar />
//         ),
//     },
//     {
//         path: '/test',
//         element: (
// 			<Test />
// 		),
//     },
// ])
