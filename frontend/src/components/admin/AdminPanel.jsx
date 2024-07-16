import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const AdminPanel = () => {
    // State management
    const [complaints, setComplaints] = useState([]);
    const [tips, setTips] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [wantedList, setWantedList] = useState([]);
    const [news, setNews] = useState([]);
    
    // Functions to handle adding, updating, and deleting
    const handleAddJob = (newJob) => {
        setJobs([...jobs, newJob]);
    };

    const handleEditJob = (updatedJob) => {
        const updatedJobs = jobs.map(job => job.id === updatedJob.id ? updatedJob : job);
        setJobs(updatedJobs);
    };

    const handleDeleteJob = (jobId) => {
        const updatedJobs = jobs.filter(job => job.id !== jobId);
        setJobs(updatedJobs);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Admin Panel</h1>
            
            {/* Complaints Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Complaints</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">User</th>
                                <th className="py-2 px-4">Complaint</th>
                                <th className="py-2 px-4">Location</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.map((complaint) => (
                                <tr key={complaint.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4">{complaint.user}</td>
                                    <td className="py-2 px-4">{complaint.summary}</td>
                                    <td className="py-2 px-4">{complaint.location}</td>
                                    <td className="py-2 px-4">
                                        <button className="mr-2 hover:text-blue-500"><FaEdit /></button>
                                        <button className="hover:text-red-500"><FaTrash /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Tips Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tips</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">User</th>
                                <th className="py-2 px-4">Tip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tips.map((tip) => (
                                <tr key={tip.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4">{tip.user}</td>
                                    <td className="py-2 px-4">{tip.content}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Current Jobs Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Current Jobs</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">Job Title</th>
                                <th className="py-2 px-4">Location</th>
                                <th className="py-2 px-4">Job Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => console.log(job)}>
                                    <td className="py-2 px-4">{job.title}</td>
                                    <td className="py-2 px-4">{job.location}</td>
                                    <td className="py-2 px-4">{job.jobType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => handleAddJob({id: jobs.length + 1, title: 'New Job', location: 'New Location', jobType: 'Full-time'})}>
                    Add Job <FaPlus />
                </button>
            </section>

            {/* Most Wanted List Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Most Wanted List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Place</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wantedList.map((wanted) => (
                                <tr key={wanted.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4">{wanted.name}</td>
                                    <td className="py-2 px-4">{wanted.place}</td>
                                    <td className="py-2 px-4">
                                        <button className="mr-2 hover:text-blue-500"><FaEdit /></button>
                                        <button className="hover:text-red-500"><FaTrash /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setWantedList([...wantedList, {id: wantedList.length + 1, name: 'New Person', place: 'New Place'}])}>
                    Add Wanted <FaPlus />
                </button>
            </section>

            {/* News Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">News</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">Title</th>
                                <th className="py-2 px-4">Description</th>
                                <th className="py-2 px-4">Image</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map((newsItem) => (
                                <tr key={newsItem.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4">{newsItem.title}</td>
                                    <td className="py-2 px-4">{newsItem.description}</td>
                                    <td className="py-2 px-4">
                                        <img src={newsItem.image} alt={newsItem.title} className="w-12 h-12 object-cover rounded" />
                                    </td>
                                    <td className="py-2 px-4">
                                        <button className="mr-2 hover:text-blue-500"><FaEdit /></button>
                                        <button className="hover:text-red-500"><FaTrash /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setNews([...news, {id: news.length + 1, title: 'New News', description: 'New Description', image: 'path/to/image.jpg'}])}>
                    Add News <FaPlus />
                </button>
            </section>
        </div>
    );
};

export default AdminPanel;
