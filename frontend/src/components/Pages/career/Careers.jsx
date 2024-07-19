import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FaLocationDot } from "react-icons/fa6";

const sampleJobs = [
  { id: 1, title: 'Crime Investication Officer', department: 'Engineering', location: 'New York', salaryRange: '$80k - $100k', description: 'Develop and maintain software applications.', requirements: 'Experience with React.js', jobType: 'Full-time', applicationDeadline: '2024-08-01', contactEmail: 'hr@example.com', postedDate: '2024-07-01' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco', salaryRange: '$90k - $120k', description: 'Manage product development lifecycle.', requirements: '5 years experience in product management', jobType: 'Full-time', applicationDeadline: '2024-08-15', contactEmail: 'hr@example.com', postedDate: '2024-07-05' },
  { id: 1, title: 'Crime Investication Officer', department: 'Engineering', location: 'New York', salaryRange: '$80k - $100k', description: 'Develop and maintain software applications.', requirements: 'Experience with React.js', jobType: 'Full-time', applicationDeadline: '2024-08-01', contactEmail: 'hr@example.com', postedDate: '2024-07-01' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco', salaryRange: '$90k - $120k', description: 'Manage product development lifecycle.', requirements: '5 years experience in product management', jobType: 'Full-time', applicationDeadline: '2024-08-15', contactEmail: 'hr@example.com', postedDate: '2024-07-05' },
  { id: 1, title: 'Crime Investication Officer', department: 'Engineering', location: 'New York', salaryRange: '$80k - $100k', description: 'Develop and maintain software applications.', requirements: 'Experience with React.js', jobType: 'Full-time', applicationDeadline: '2024-08-01', contactEmail: 'hr@example.com', postedDate: '2024-07-01' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco', salaryRange: '$90k - $120k', description: 'Manage product development lifecycle.', requirements: '5 years experience in product management', jobType: 'Full-time', applicationDeadline: '2024-08-15', contactEmail: 'hr@example.com', postedDate: '2024-07-05' },
  { id: 1, title: 'Crime Investication Officer', department: 'Engineering', location: 'New York', salaryRange: '$80k - $100k', description: 'Develop and maintain software applications.', requirements: 'Experience with React.js', jobType: 'Full-time', applicationDeadline: '2024-08-01', contactEmail: 'hr@example.com', postedDate: '2024-07-01' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco', salaryRange: '$90k - $120k', description: 'Manage product development lifecycle.', requirements: '5 years experience in product management', jobType: 'Full-time', applicationDeadline: '2024-08-15', contactEmail: 'hr@example.com', postedDate: '2024-07-05' },
  { id: 1, title: 'Crime Investication Officer', department: 'Engineering', location: 'New York', salaryRange: '$80k - $100k', description: 'Develop and maintain software applications.', requirements: 'Experience with React.js', jobType: 'Full-time', applicationDeadline: '2024-08-01', contactEmail: 'hr@example.com', postedDate: '2024-07-01' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco', salaryRange: '$90k - $120k', description: 'Manage product development lifecycle.', requirements: '5 years experience in product management', jobType: 'Full-time', applicationDeadline: '2024-08-15', contactEmail: 'hr@example.com', postedDate: '2024-07-05' },
  { id: 1, title: 'Crime Investication Officer', department: 'Engineering', location: 'New York', salaryRange: '$80k - $100k', description: 'Develop and maintain software applications.', requirements: 'Experience with React.js', jobType: 'Full-time', applicationDeadline: '2024-08-01', contactEmail: 'hr@example.com', postedDate: '2024-07-01' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco', salaryRange: '$90k - $120k', description: 'Manage product development lifecycle.', requirements: '5 years experience in product management', jobType: 'Full-time', applicationDeadline: '2024-08-15', contactEmail: 'hr@example.com', postedDate: '2024-07-05' },
];

const Careers = () => {
  const [jobs, setJobs] = useState(sampleJobs);
  const [filters, setFilters] = useState({
    salaryRange: '',
    department: '',
    location: '',
  });
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSeeMore = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.salaryRange === '' || job.salaryRange.includes(filters.salaryRange)) &&
      (filters.department === '' || job.department.includes(filters.department)) &&
      (filters.location === '' || job.location.includes(filters.location)) &&
      (search === '' || job.title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="p-4 md:p-6 min-h-[100%] poppins dark:bg-gray-100 bg-[var(--bg2)]">
      <div className="mb-6 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] shadow-2xl">
        <h2 className="text-2xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center dark:shadow-black/10 shadow-black/70 bg-[var(--bg1)] dark:bg-gray-100 border-[1px] border-[var(--opac)] dark:border-gray-400 shadow-2xl">
          Careers
        </h2>

        <div className="p-5">
          <div className="flex flex-col md:flex-row gap-4 mb-5">
          <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm text-gray-500 pb-2">Search</label>
            <input
              type="text"
              placeholder="Search by job title"
              value={search}
              onChange={handleSearchChange}
              className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
            />
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label className="text-sm text-gray-500 pb-2">Salary Range</label>
              <input
                type="text"
                name="salaryRange"
                value={filters.salaryRange}
                onChange={handleFilterChange}
                placeholder="Filter by Salary"
                className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label className="text-sm text-gray-500 pb-2">Department</label>
              <input
                type="text"
                name="department"
                value={filters.department}
                onChange={handleFilterChange}
                placeholder="Filter by Department"
                className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <label className="text-sm text-gray-500 pb-2">Location</label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                placeholder="Filter by Location"
                className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
              />
            </div>
          </div>

          <div className="inline-flex items-center justify-center w-full">
    <hr className="w-[90%] h-px my-8 bg-[var(--lgold)] border-0 dark:bg-[var(--dltext)]"></hr>
    <span className="absolute px-3 font-medium text-[var(--lgold)] -translate-x-1/2 bg-[var(--bg1)] left-1/2 dark:text-[var(--dltext)] dark:bg-gray-100">Explore Careers</span>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="p-4 bg-[var(--opac)] dark:bg-gray-100 border-[1px] border-[var(--opac)] dark:border-gray-300 rounded-md shadow-black/30 dark:shadow-none shadow-md">
                <h3 className="md:text-lg text-md font-medium text-gray-200 dark:text-[var(--dltext)]">{job.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-600">{job.department}</p>
                <button
                  onClick={() => handleSeeMore(job)}
                  className="mt-4 text-blue-500 border-blue-500 border-[1px] rounded-md px-3 py-1 text-sm hover:text-blue-700 hover:border-blue-700"
                >
                  See More <FaIcons.FaChevronDown className="inline ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>



      {selectedJob && (
        <div className="fixed inset-0 text-gray-300 dark:text-gray-600 flex items-center justify-center z-50">
          <div className="bg-[var(--opac)] backdrop-blur-3xl border-[1px] border-[var(--opac)] dark:border-gray-400 md:p-6 p-3 rounded-xl lg:w-[85%] shadow-black/80 dark:shadow-black/40 shadow-2xl w-[94%]">
            <h2 className="text-xl font-medium mb-2 text-center">Job Details</h2>
            <div className="flex items-center grid gap-4 md:grid-cols-3 grid-cols-1 justify-center rounded-lg border border-gray-400 p-4">
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><FaIcons.FaUserTie /></div>
            <div>
              <p className="font-light text-xs">Title</p>
              <p className="md:text-lg text-md">{selectedJob.title}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><FaIcons.FaUserTag /></div>
            <div>
              <p className="font-light text-xs">Department</p>
              <p className="md:text-lg text-md">{selectedJob.department}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><FaLocationDot /></div>
            <div>
              <p className="font-light text-xs">Location</p>
              <p className="md:text-lg text-md">{selectedJob.location}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><AiIcons.AiOutlineBars /></div>
            <div>
              <p className="font-light text-xs">Description</p>
              <p className="md:text-lg text-md">{selectedJob.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><IoIcons.IoMdCheckboxOutline /></div>
            <div>
              <p className="font-light text-xs">Requirements</p>
              <p className="md:text-lg text-md">{selectedJob.requirements}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><FaIcons.FaBusinessTime /></div>
            <div>
              <p className="font-light text-xs">Job Type</p>
              <p className="md:text-lg text-md">{selectedJob.jobType}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><FaIcons.FaDollarSign /></div>
            <div>
              <p className="font-light text-xs">Salary Range</p>
              <p className="md:text-lg text-md">{selectedJob.salaryRange}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><FaIcons.FaRegCalendarPlus /></div>
            <div>
              <p className="font-light text-xs">Posted Date</p>
              <p className="md:text-lg text-md">{selectedJob.postedDate}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full"><FaIcons.FaRegCalendarCheck /></div>
            <div>
              <p className="font-light text-xs">Deadline</p>
              <p className="md:text-lg text-md">{selectedJob.applicationDeadline}</p>
            </div>
          </div>
          
          </div>
          <button className="mt-4 text-blue-500 px-4 py-1 shadow-black/40 border-[1px] hover:text-white border-blue-500 dark:shadow-black/10 dark:shadow-md shadow-xl rounded-full hover:bg-blue-700" onClick={handleCloseDetails}>Close</button>
            <button className="mt-4 ml-2 text-green-500 px-4 py-1 shadow-black/40 border-[1px] hover:text-white border-green-500 dark:shadow-black/10 dark:shadow-md shadow-xl rounded-full hover:bg-green-700">Apply  |  {selectedJob.contactEmail}</button>
       
        </div>
              </div>

      )}
    </div>
  );
};

export default Careers;
