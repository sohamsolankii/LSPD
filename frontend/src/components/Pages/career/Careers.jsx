import React, { useState } from 'react';
import { CgChevronRightO } from "react-icons/cg";

const jobCategories = [
    'All Departments',
    'Patrol',
    'Detective',
    'Forensics',
    'Administration',
    'Traffic',
    'Special Operations',
];

const jobs = [
    {
        image: '/src/assets/place.png',
        title: 'Patrol Officer',
        department: 'Patrol',
    },
    {
        image: '/src/assets/place.png',
        title: 'Crime Scene Investigator',
        department: 'Forensics',
    },
    {
        image: '/src/assets/place.png',
        title: 'Detective',
        department: 'Detective',
    },
    {
        image: '/src/assets/place.png',
        title: 'Patrol Officer',
        department: 'Patrol',
    },
    {
        image: '/src/assets/place.png',
        title: 'Crime Scene Investigator',
        department: 'Forensics',
    },
    {
        image: '/src/assets/place.png',
        title: 'Detective',
        department: 'Detective',
    },
    {
        image: '/src/assets/place.png',
        title: 'Patrol Officer',
        department: 'Patrol',
    },
    {
        image: '/src/assets/place.png',
        title: 'Crime Scene Investigator',
        department: 'Forensics',
    },
    {
        image: '/src/assets/place.png',
        title: 'Detective',
        department: 'Detective',
    },
];

const Careers = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Departments');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = jobs.filter(
        job =>
            (selectedCategory === 'All Departments' || job.department === selectedCategory) &&
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-[var(--bg1)] text-[var(--lblue)] dark:bg-[var(--dbg1)] dark:text-[var(--dlgold)] min-h-screen p-4 md:p-12">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl pricedown text-[var(--lblue)] dark:text-[var(--dltext)] mb-4">
                    Careers at LSPD
                </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-8">
                <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="p-2 mb-4 md:mb-0 md:mr-4 bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] border border-gray-300 rounded-md dark:border-[var(--dltext)] text-[var(--ltext)] dark:text-[var(--dlblue)]"
                >
                    {jobCategories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Search for jobs..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="p-2 bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] border border-gray-300 rounded-md dark:border-[var(--dltext)] text-[var(--ltext)] dark:text-[var(--dlblue)]"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredJobs.map((job, index) => (
                    <div
                        key={index}
                        className="bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] p-4 rounded-2xl shadow-2xl dark:shadow-none dark:border-[var(--dltext)] dark:border-1 text-left transform transition-transform duration-300 hover:border-[var(--hover-border-color)] 
                        hover:dark:border-[var(--dllgold)] hover:bg-gradient-to-r from-[var(--hover-bg-gradient-start)] to-[var(--hover-bg-gradient-end)] hover:dark:bg-gradient-to-r hover:dark:from-[var(--dllgold)] hover:dark:to-[var(--dbg1l)] hover:shadow-black/70 hover:shadow-4xl"
                    >
                        <img
                            src={job.image}
                            alt={job.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="flex justify-between">
                        <div className="relative">
                        <h3 className="poppins text-lg md:text-xl text-[var(--lblue)] dark:text-[var(--dltext)]">
                            {job.title}
                        </h3>
                        <p className="poppins text-sm md:text-md text-[var(--ltext)] dark:text-[var(--dlblue)]">
                            {job.department}
                        </p>
                        </div>
                        <button
                            onClick={() => window.location.href = `/job-details/${index}`}
                            className="mt-4 p-2 text-2xl hover:bg-[var(--bg1)] text-[var(--lgold)] dark:text-[var(--dltext)] rounded-md hover:dark:bg-[var(--dlgold)] hover:bg-[var(--bg1)] hover:dark:bg-[var(--dllgold)] transition duration-200"
                        >
                            <CgChevronRightO />
                        </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;
