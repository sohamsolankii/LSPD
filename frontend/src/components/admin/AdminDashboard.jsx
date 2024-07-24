import React, {useContext} from 'react'
import {UserContext} from '../../context/userContext'
import LSPDLogo from '/src/assets/lspd-logo.png'
// import AdminStarter from '../AdminStarter';  // Create a similar starter for admin if necessary
// import AdminWantedList from './AdminWantedList';  // Admin specific component for CRUD operations

const adminDashboardData = [
    {
        image: '/src/assets/wanted.png',
        url: '/admin/',
        title: 'Manage Most Wanted List',
        description: 'Add, Update, Delete Most Wanted Profiles',
    },
    {
        image: '/src/assets/careers.png',
        url: '/admin/jobs',
        title: 'Add Jobs for LSPD',
        description:
            'From Rookie to All-Star Cop – Start Your Journey in Los Santos',
    },
    {
        image: '/src/assets/careers.png',
        title: 'Review Job Applications',
        description:
            'From Rookie to All-Star Cop – Start Your Journey in Los Santos',
    },
    {
        image: '/src/assets/news.png',
        url: '/admin/news',
        title: 'Manage News and Alerts',
        description: 'Add, Update, Delete News and Alerts',
    },
    {
        image: '/src/assets/tip.png',
        url: '/admin/show-tips',
        title: 'Read Submitted Tips',
        description: 'View and Manage Tips Submitted by Users',
    },
    {
        image: '/src/assets/news.png',
        url: '/admin/crime-reports',
        title: 'Read Submitted Complaints',
        description: 'Add, Update, Delete News and Alerts',
    },
]

const AdminDashboard = () => {
    const {user, setUser} = useContext(UserContext)
    // console.log("User form Admin: ",user);

    return (
        <div className="bg-[var(--bg1)] gradMesh dark:gradMeshLight dark:moveBackground text-[var(--lblue)] dark:bg-[var(--dbg1)] dark:text-[var(--dlgold)] min-h-screen">
            {' '}
            {/* <AdminStarter /> */}
            <section className="p-4 md:p-12">
                <div className="text-center m-4 md:m-8 p-4 md:p-12">
                    <h2 className="text-3xl md:text-5xl pricedown text-[var(--lblue)] dark:text-[var(--dltext)] mb-2 md:mb-4">
                        Admin Dashboard
                    </h2>
                    <p className="text-lg md:text-2xl poppins mb-2 text-[var(--ltext)] dark:text-white">
                        Manage Everything in Los Santos with Ease and Precision
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {adminDashboardData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => (window.location.href = item.url)}
                            className="flex cursor-pointer bg-[var(--opac)] dark:bg-white p-4 rounded-2xl shadow-black/40 shadow-2xl border-[1px] border-[var(--opac)] dark:border-[var(--whiteop)] dark:border-[1px] text-left items-center transform transition-transform duration-300 hover:bg-[var(--opac2)] hover:dark:bg-white"
                        >
                            <img
                                src={item.image}
                                alt={`Image ${index + 1}`}
                                className="w-1/3 cursor-pointer md:w-1/4 rounded-lg mr-4 md:mr-6"
                            />
                            <div>
                                <h3
                                    className={`font-bold text-[var(--lgold)] dark:text-blue-700 cursor-pointer text-lg md:text-2xl mb-1 md:mb-2 poppins`}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-[var(--ltext)] cursor-pointer dark:text-[var(--dlblue)] poppins text-sm md:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* <AdminWantedList />  Include admin-specific component for managing most wanted list */}
        </div>
    )
}

export default AdminDashboard
