import axios from 'axios'
import React, {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import {FaLocationDot} from 'react-icons/fa6'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Careers = () => {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()

    const [selectedJob, setSelectedJob] = useState(null)

    useEffect(() => {
        fetchCareers()
    }, [])

    const applyJob = async (id) => {
        try {
            const response = await axios.get(`/api/v1/application/${id}`)
            toast.success('Application submitted successfully!')
        } catch (err) {
            if (err.response && err.response.status === 404) {
                toast.error('This job has already been applied')
            } else {
                toast.error('You must have to login first!')
                navigate('/login')
            }
            console.log(err)
        }
    }

    const fetchCareers = async () => {
        try {
            const response = await axios.get('/api/v1/job', {
                withCredentials: true,
            })
            console.log(response.data.data)
            setJobs(response.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="p-4 md:p-6 min-h-screen poppins bg-cover dark:bg-gray-100 bg-[var(--bg2)]">
            <div className="mb-6 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] ">
                <h2 className="text-3xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center dark:shadow-black/10 shadow-black/70 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400">
                    Careers
                </h2>

                <div className="p-5">
                    {/* <div className="flex flex-col md:flex-row gap-4 mb-5">
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-sm text-gray-500 pb-2">
                                Search
                            </label>
                            <input
                                type="text"
                                placeholder="Search by job title"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-sm text-gray-500 pb-2">
                                Salary Range
                            </label>
                            <input
                                type="text"
                                name="salaryRange"
                                value={filters.salaryRange}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        salaryRange: e.target.value,
                                    })
                                }
                                placeholder="Filter by Salary"
                                className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-sm text-gray-500 pb-2">
                                Department
                            </label>
                            <input
                                type="text"
                                name="department"
                                value={filters.department}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        department: e.target.value,
                                    })
                                }
                                placeholder="Filter by Department"
                                className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-sm text-gray-500 pb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={filters.location}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        location: e.target.value,
                                    })
                                }
                                placeholder="Filter by Location"
                                className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
                            />
                        </div>
                    </div> */}

                    <div className="inline-flex items-center mb-[50px] justify-center w-full">
                        <hr className="w-[90%] h-px my-8 bg-[var(--lgold)] border-0 dark:bg-[var(--dltext)]"></hr>
                        <span className="absolute px-3 text-lg text-[var(--lgold)] -translate-x-1/2 bg-[var(--bg1)] left-1/2 dark:text-[var(--dltext)] dark:bg-gray-100">
                            Explore Careers
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {jobs.map((job) => (
                            <div
                                key={job._id}
                                className="p-6 bg-[var(--opac)] dark:bg-gray-100 border-[1px] border-[var(--opac)] dark:border-gray-300 rounded-lg shadow-black/50 shadow-lg dark:shadow-none hover:bg-[var(--opac2)] hover:dark:bg-blue-100"
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex flex-col gap-1 mb-4">
                                        <div className="flex items-center mb-2">
                                            <h3 className="text-xl font-semibold text-[var(--lgold)] dark:text-[var(--dltext)]">
                                                {job.title}
                                            </h3>
                                        </div>
                                        <hr className="h-px mb-2 bg-[var(--opac2)] border-0 dark:bg-gray-300"></hr>
                                        <div className="flex items-center gap-2 text-md text-gray-200 dark:text-gray-600">
                                            <AiIcons.AiOutlineUser />
                                            <span>
                                                {job.department || 'LSPD'}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-md text-gray-200 dark:text-gray-600">
                                            <FaLocationDot />
                                            <span>{job.location}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-md text-gray-200 dark:text-gray-600">
                                            <div>
                                                <FaIcons.FaDollarSign />
                                            </div>
                                            <span>{job.salaryRange}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedJob(job)}
                                        className="md:w-1/4 w-1/3 align-right text-xs p-1 font-medium transition-colors hover:text-gray-400 border-[1px] hover:border-gray-400 border-blue-500 text-blue-500 rounded-md"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Just make everything simple , dont use too much popup things , */}
            {/* when You can make just simple card with good layout */}
            {selectedJob && (
                <div className="fixed inset-0 text-gray-300 dark:text-gray-600 flex items-center justify-center z-10">
                    <div className="bg-[var(--opac)] backdrop-blur-3xl border-[1px] border-[var(--opac)] animate-appear blockanim dark:border-gray-400 md:p-6 p-3 rounded-xl lg:w-[85%] shadow-black/80 dark:shadow-black/40 shadow-2xl w-[94%]">
                        <h2 className="text-xl font-medium mb-2 text-center">
                            Job Details
                        </h2>
                        <div className="flex items-center grid gap-4 md:grid-cols-3 grid-cols-1 justify-center rounded-lg p-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaUserTie />
                                </div>
                                <div>
                                    <p className="font-light text-xs">Title</p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.title}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaUserTag />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Department
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.department || 'LSPD'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaLocationDot />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Location
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.location}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <AiIcons.AiOutlineBars />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Experience
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.experience}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <IoIcons.IoMdPeople />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Job Type
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.jobType}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaDollarSign />
                                </div>
                                <div>
                                    <p className="font-light text-xs">Salary</p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.salaryRange}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaBuilding />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Company
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.company}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaCalendarAlt />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Posting Date
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.postingDate}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaClock />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Application Deadline
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedJob.applicationDeadline}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="mt-4 p-3 bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md rounded-md">
                            <p className="text-justify">
                                {selectedJob.details}
                            </p>
                        </div> */}
                        <div className="flex mt-5">
                            <button
                                onClick={() => applyJob(selectedJob._id)}
                                className="text-green-600 border-[1px] border-green-600 hover:border-blue-500 hover:text-blue-500 px-4 p-1 rounded-md"
                            >
                                Apply
                            </button>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="ml-4 text-red-600 border-[1px] border-red-600 hover:border-blue-500 hover:text-blue-500 px-4 p-1 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Careers
