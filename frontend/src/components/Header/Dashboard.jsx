import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import LSPDLogo from '/src/assets/lspd-logo.png';
import Starter from '../Starter';
import WantedList from './../WantedList';

const dashboardData = [
    {
        image: '/src/assets/wanted.png',
        title: 'Most Wanted List',
        description: 'Catch Them if You Can (But Maybe Don’t Try Too Hard)',
    },
    {
        image: '/src/assets/tip.png',
        title: 'Submit a Tip',
        description:
            'Got a Hot Tip? Let Us Know (or Just Gossip, We’re Not Judging)',
    },
    {
        image: '/src/assets/careers.png',
        title: 'Careers at LSPD',
        description:
            'From Rookie to All-Star Cop – Start Your Journey in Los Santos',
    },
    {
        image: '/src/assets/news.png',
        title: 'News and Alerts',
        description: 'Stay Informed on the Latest in Los Santos',
    },
];

const Dashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="bg-[var(--bg1)] text-[var(--lblue)] min-h-screen">
            <Starter />
            <section className="p-4 md:p-12">
                <div className="text-center m-4 md:m-8 p-4 md:p-12">
                    <h2 className="text-3xl md:text-5xl pricedown text-[var(--lblue)] mb-2 md:mb-4">
                        Welcome to LSPD Eagle-eye
                    </h2>
                    <p className="text-lg md:text-2xl poppins mb-2 text-[var(--ltext)]">
                        Your Digital Hotline for All Things Los Santos! (Yes,
                        Even the Crazy Stuff)
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
                    {dashboardData.map((item, index) => (
                        <div
                            key={index}
                            className="flex bg-[var(--bg1l)] p-4 rounded-2xl shadow-2xl text-left items-center transform transition-transform duration-300 hover:scale-105 hover:border-[var(--hover-border-color)] hover:border-2 hover:bg-gradient-to-r from-[var(--hover-bg-gradient-start)] to-[var(--hover-bg-gradient-end)]"
                        >
                            <img
                                src={item.image}
                                alt={`Image ${index + 1}`}
                                className="w-1/3 md:w-1/4 rounded-lg mr-4 md:mr-6"
                            />
                            <div>
                                <h3
                                    className={`pricedown text-lg md:text-4xl mb-1 md:mb-2 ${item.title === 'Most Wanted List' || item.title === 'News and Alerts' ? 'text-[var(--lgold)]' : ''}`}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-[var(--ltext)] poppins text-sm md:text-xl">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-[var(--bg1l)] p-4 md:p-12 rounded-2xl shadow-2xl text-left mt-4 md:mt-8 mb-4 md:mb-10">
                    <h3 className="text-lg md:text-4xl pricedown text-[var(--lgold)] font-bold mb-4">
                        Why LSPD Eagle-eye?
                    </h3>
                    <p className="my-2 poppins md:my-8 text-[var(--ltext)] text-sm md:text-xl">
                        The LSPD Eagle-eye portal was created to connect the Los
                        Santos Police Department with its vibrant community. In
                        a dynamic and unpredictable city like Los Santos,
                        staying ahead requires more than just police presence;
                        it needs the vigilance of every citizen. This
                        user-friendly portal allows residents to report crimes,
                        share tips, and stay informed about local safety issues.
                        By harnessing community input, LSPD Eagle-eye aims to
                        enhance public safety, build trust, and ensure a
                        responsive and transparent police force. Whether it’s
                        suspicious activity or crucial information, your input
                        can make a difference.
                    </p>
                    <p className="mb-2 poppins md:mb-8 text-[var(--ltext)] text-sm md:text-xl">
                        Join us in keeping Los Santos safe and lively, one tip
                        at a time!
                    </p>
                    <img
                        src="/src/assets/place.png"
                        alt="Place"
                        className="rounded-xl shadow-xl w-full md:w-[80%] mx-auto"
                    />
                </div>
            </section>
            <WantedList />
        </div>
    );
};

export default Dashboard;
