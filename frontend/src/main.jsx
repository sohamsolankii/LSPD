import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    createRoutesFromElements,
} from 'react-router-dom'

import App from './App.jsx'
import Login from './components/Forms/Login.jsx'
import Register from './components/Forms/Register.jsx'
import Starter from './components/Starter.jsx'
import ReportCrime from './components/ReportCrime.jsx'
import Dashboard from './components/Dashboard.jsx'
import WantedList from './components/WantedList.jsx'
import Wanted from './components/Wanted.jsx'
import SubmitTip from './components/SubmitTip.jsx'
// import Try3D from './components/Try3D.jsx'
import News from './components/Pages/news/News.jsx'
import Careers from './components/Pages/career/Careers.jsx'
import AddJob from './components/admin/AddJob.jsx'
import AddNews from './components/admin/AddNews.jsx'
import AdminDashboard from './components/admin/AdminDashboard.jsx'
import Footer from './components/Footer/Footer.jsx'
import AdminShowTip from './components/admin/AdminShowTip.jsx'
import AdminLogin from './components/Forms/AdminLogin.jsx'

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
                        <Footer />
                    </>
                }
            />
            <Route path="/login" element={<Login />} />,
            <Route path="/register" element={<Register />} />
            <Route path="/news" element={<News />} />,
            <Route path="/most-wanted" element={<Wanted />} />,
            <Route path="/submit-tip" element={<SubmitTip />} />,
            <Route path="/report-crime" element={<ReportCrime />} />,
            <Route path="/career" element={<Careers />} />
            <Route
                path="/admin"
                element={
                    <>
                        <AdminDashboard />
                        <AddJob />
                        <AddNews />
                    </>
                }
            />
            
			<Route path="/admin/show-tips" element={<AdminShowTip/>}></Route>
			<Route path="/admin-login" element={<AdminLogin/>}></Route>
        </Route>,
    ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
