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

    const [filters, setFilters] = useState({
        salaryRange: '',
        department: '',
        location: '',
    })
    const [search, setSearch] = useState('')
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
                toast.error(
                    'You must have to login first!',
                )
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
                <h2 className="text-2xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center dark:shadow-black/10 shadow-black/70 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400">
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
                        <span className="absolute px-3 text-4xl text-[var(--lgold)] -translate-x-1/2 bg-[var(--bg1)] left-1/2 dark:text-[var(--dltext)] dark:bg-gray-100">
                            Explore Careers
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {jobs.map((job) => (
                            <div
                                key={job._id}
                                className="p-4 bg-[var(--opac)] h-[300px] dark:bg-gray-100 border-[1px] border-[var(--opac)] dark:border-gray-300 rounded-md shadow-black/30 dark:shadow-none shadow-md"
                            >
                                <div className="flex flex-col h-full justify-evenly">
                                    <div className="flex items-center mb-2">
                                        <span className="text-gray-400 dark:text-gray-500 font-medium text-2xl mr-1">
                                            Job Title:
                                        </span>
                                        <h3 className="text-2xl md:text-2xl font-medium text-gray-200 dark:text-[var(--dltext)]">
                                            {job.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center text-md text-gray-200 dark:text-gray-600 mb-2">
                                        <span className="text-gray-400 dark:text-gray-500 font-medium mr-1">
                                            Department:
                                        </span>
                                        <span>{job.department || 'LSPD'}</span>
                                    </div>
                                    <div className="text-md text-gray-200 dark:text-gray-600 mb-2">
                                        <span className="text-gray-400 dark:text-gray-500 font-medium mr-1">
                                            Location:
                                        </span>
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="text-md text-gray-200 dark:text-gray-600 mb-2">
                                        <span className="text-gray-400 dark:text-gray-500 font-medium mr-1">
                                            Type:
                                        </span>
                                        <span>{job.jobType}</span>
                                    </div>
                                    <div className="text-md text-gray-200 dark:text-gray-600 mb-4">
                                        <span className="text-gray-400 dark:text-gray-500 font-medium mr-1">
                                            Salary:
                                        </span>
                                        <span>${job.salaryRange}</span>
                                    </div>
                                    <button
                                        onClick={() => applyJob(job._id)}
                                        className="w-full py-2 text-white bg-green-600 hover:bg-green-700 rounded-md font-medium transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Just make everything simple , dont use too much popup things , */}
            {/* when You can make just simple card with good layout */}
            {/* {selectedJob && (
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
                        </div>
                        <div className="mt-4 p-3 bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md rounded-md">
                            <p className="text-justify">
                                {selectedJob.details}
                            </p>
                        </div>
                        <div className="flex justify-evenly mt-5">
                            <button
                                onClick={() => applyJob(selectedJob._id)}
                                className="text-white bg-[green] hover:bg-gray-300 p-2 rounded-md"
                            >
                                Apply Now
                            </button>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="text-white bg-[red] hover:bg-gray-300 p-2 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default Careers
