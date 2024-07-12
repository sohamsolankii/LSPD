import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import LSPDLogo from '/src/assets/lspd-logo.png';
// import AdminStarter from '../AdminStarter';  // Create a similar starter for admin if necessary
// import AdminWantedList from './AdminWantedList';  // Admin specific component for CRUD operations

const adminDashboardData = [
    {
        image: '/src/assets/wanted.png',
        title: 'Manage Most Wanted List',
        description: 'Add, Update, Delete Most Wanted Profiles',
    },
    {
        image: '/src/assets/tip.png',
        title: 'Read Submitted Tips',
        description: 'View and Manage Tips Submitted by Users',
    },
    {
        image: '/src/assets/careers.png',
        title: 'Careers at LSPD',
        description: 'From Rookie to All-Star Cop – Start Your Journey in Los Santos',
    },
    {
        image: '/src/assets/news.png',
        title: 'Manage News and Alerts',
        description: 'Add, Update, Delete News and Alerts',
    },
];

const AdminDashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="bg-[var(--bg1)] text-[var(--lblue)] dark:bg-[var(--dbg1)] dark:text-[var(--dlgold)] min-h-screen">
            {/* <AdminStarter /> */}
            <section className="p-4 md:p-12">
                <div className="text-center m-4 md:m-8 p-4 md:p-12">
                    <h2 className="text-3xl md:text-5xl pricedown text-[var(--lblue)] dark:text-[var(--dltext)] mb-2 md:mb-4">
                        Admin Dashboard
                    </h2>
                    <p className="text-lg md:text-2xl poppins mb-2 text-[var(--ltext)] dark:text-[var(--dgold)]">
                        Manage Everything in Los Santos with Ease and Precision
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
                    {adminDashboardData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                index === 0
                                    ? (window.location.href = '/admin/most-wanted')
                                    : index === 1
                                    ? (window.location.href = '/admin/read-tips')
                                    : index === 2
                                    ? (window.location.href = '/admin/careers')
                                    : (window.location.href = '/admin/news');
                            }}
                            className="flex cursor-pointer bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] p-4 rounded-2xl shadow-2xl dark:shadow-none dark:border-[var(--dltext)] dark:border-1 text-left items-center transform transition-transform duration-300 hover:scale-105 hover:border-[var(--hover-border-color)] 
                            hover:dark:border-[var(--dllgold)] hover:border-2 hover:bg-gradient-to-r from-[var(--hover-bg-gradient-start)] to-[var(--hover-bg-gradient-end)] hover:dark:bg-gradient-to-r hover:dark:from-[var(--dllgold)] hover:dark:to-[var(--dbg1l)]"
                        >
                            <img
                                src={item.image}
                                alt={`Image ${index + 1}`}
                                className="w-1/3 cursor-pointer md:w-1/4 rounded-lg mr-4 md:mr-6"
                            />
                            <div>
                                <h3
                                    className={`pricedown cursor-pointer text-lg md:text-4xl mb-1 md:mb-2 ${item.title === 'Manage Most Wanted List' || item.title === 'Manage News and Alerts' ? 'text-[var(--lgold)] dark:text-[#F6B922]' : ''}`}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-[var(--ltext)] cursor-pointer dark:text-[var(--dlblue)] poppins text-sm md:text-xl">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] p-4 md:p-12 rounded-2xl shadow-2xl text-left mt-4 md:mt-8 mb-4 md:mb-10">
                    <h3 className="text-lg md:text-4xl pricedown text-[var(--lgold)] dark:text-[var(--dlgold)] font-bold mb-4">
                        Why Use Admin Dashboard?
                    </h3>
                    <p className="my-2 poppins md:my-8 text-[var(--ltext)] dark:text-[var(--dlblue)] text-sm md:text-xl">
                        The Admin Dashboard of LSPD Eagle-eye provides you with the tools and resources you need to manage and oversee all activities within Los Santos. From handling critical updates to ensuring that the most wanted list is always current, your role is crucial in maintaining order and safety. This dashboard streamlines your tasks and helps you perform your duties effectively.
                    </p>
                    <img
                        src="/src/assets/admin-dashboard.png"
                        alt="Admin Dashboard"
                        className="rounded-xl shadow-xl w-full mx-auto"
                    />
                </div>
            </section>
            {/* <AdminWantedList />  Include admin-specific component for managing most wanted list */}
        </div>
    );
}

export default AdminDashboard;
