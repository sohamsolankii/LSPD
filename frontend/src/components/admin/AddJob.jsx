import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddJob = () => {
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState({
      title: '',
      location: '',
      jobType: '',
      description: '',
      requirements: '',
      salaryRange: '',
      applicationDeadline: '',
      contactEmail: '',
      postedDate: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentJob, setCurrentJob] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
  
    const handleChange = (e) => {
      setNewJob({
        ...newJob,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleAddJob = () => {
      if (isEditing) {
        setJobs(jobs.map((job) => (job.id === currentJob.id ? newJob : job)));
        setIsEditing(false);
        setCurrentJob(null);
      } else {
        setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
      }
      setNewJob({
        title: '',
        location: '',
        jobType: '',
        description: '',
        requirements: '',
        salaryRange: '',
        applicationDeadline: '',
        contactEmail: '',
        postedDate: ''
      });
    };
  
    const handleEdit = (job) => {
      setIsEditing(true);
      setCurrentJob(job);
      setNewJob(job);
    };
  
    const handleDelete = (jobId) => {
      setJobs(jobs.filter((job) => job.id !== jobId));
    };
  
    const handleDetails = (job) => {
      setCurrentJob(job);
      setShowDetails(true);
    };
  
    const closeDetails = () => {
      setShowDetails(false);
      setCurrentJob(null);
    };
  
    return (
      <div className="p-4 md:p-6 poppins bg-[var(--bg2)]">
        <div className="mb-6 rounded-2xl shadow-black/70 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
  <h2 className="text-2xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] text-center shadow-black/70 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
    {isEditing ? 'Edit Job' : 'Add Job'}
  </h2>
  <form className="grid grid-cols-1 gap-5 md:grid-cols-2 p-5" onSubmit={(e) => e.preventDefault()}>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">Enter the job title</label>
      <input
        type="text"
        name="title"
        value={newJob.title}
        onChange={handleChange}
        placeholder="Job Title"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">Enter the job location</label>
      <input
        type="text"
        name="location"
        value={newJob.location}
        onChange={handleChange}
        placeholder="Location"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">Specify the type of job</label>
      <input
        type="text"
        name="jobType"
        value={newJob.jobType}
        onChange={handleChange}
        placeholder="Job Type"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">Provide a job description</label>
      <textarea
        name="description"
        value={newJob.description}
        onChange={handleChange}
        placeholder="Description"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">List the job requirements</label>
      <textarea
        name="requirements"
        value={newJob.requirements}
        onChange={handleChange}
        placeholder="Requirements"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">State the salary range</label>
      <input
        type="text"
        name="salaryRange"
        value={newJob.salaryRange}
        onChange={handleChange}
        placeholder="Salary Range"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">Set the application deadline</label>
      <input
        type="date"
        name="applicationDeadline"
        value={newJob.applicationDeadline}
        onChange={handleChange}
        placeholder="Application Deadline"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">Enter the contact email</label>
      <input
        type="email"
        name="contactEmail"
        value={newJob.contactEmail}
        onChange={handleChange}
        placeholder="Contact Email"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 pb-2">Enter the posted date</label>
      <input
        type="date"
        name="postedDate"
        value={newJob.postedDate}
        onChange={handleChange}
        placeholder="Posted Date"
        className="p-2 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--opac)] backdrop-blur-md shadow-black/30 shadow-md text-gray-200"
        required
      />
    </div>
    <div className="md:col-span-2 flex justify-center">
      <button
        type="submit"
        className="p-2 px-5 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--bg4op)] backdrop-blur-md shadow-black/30 hover:shadow-black/40 hover:bg-[var(--opac)] shadow-md hover:shadow-xl text-gray-200 flex items-center justify-center"
        onClick={handleAddJob}
      >
        {isEditing ? 'Update Job' : 'Add Job'} <FaPlus className="ml-2" />
      </button>
    </div>
  </form>
</div>


        <div className="mb-6 rounded-2xl shadow-black/70 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
        <h2 className="text-2xl rounded-xl z-10 font-medium m-2 p-2 text-[var(--lgold)] text-center shadow-black/70 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">Current Jobs</h2>
        <table className="min-w-full mb-4 rounded-md shadow-black/30 text-sm md:text-lg text-gray-200">
          <thead>
            <tr>
              <th className="py-2 font-medium text-gray-500">Job Title</th>
              <th className="py-2 font-medium text-gray-500">Location</th>
              <th className="py-2 font-medium text-gray-500">Job Type</th>
              <th className="py-2 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="border-[1px] border-[var(--opac)] font-regular text-gray-300 px-4 py-2">{job.title}</td>
                <td className="border-[1px] border-[var(--opac)] font-regular text-gray-300 px-4 py-2">{job.location}</td>
                <td className="border-[1px] border-[var(--opac)] font-regular text-gray-300 px-4 py-2">{job.jobType}</td>
                <td className="border-[1px] border-[var(--opac)] font-regular text-gray-300 px-4 py-2">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => handleDetails(job)}>Details</button>
                  <button className="text-blue-500 hover:text-blue-700 ml-4" onClick={() => handleEdit(job)}>Edit</button>
                  <button className="text-red-500 hover:text-red-700 ml-4" onClick={() => handleDelete(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDetails && currentJob && (
        <div className="fixed inset-0 text-gray-300 flex items-center justify-center">
          <div className="bg-[var(--opac)] backdrop-blur-3xl border-[1px] border-[var(--opac)] p-4 rounded-xl md:w-1/2 shadow-black/80 shadow-2xl w-4/5">
            <h2 className="text-xl font-medium mb-2">Job Details</h2>

            <p className="font-light"><strong>Title:</strong> {currentJob.title}</p>
            <p className="font-light"><strong>Location:</strong> {currentJob.location}</p>
            <p className="font-light"><strong>Job Type:</strong> {currentJob.jobType}</p>
            <p className="font-light"><strong>Description:</strong> {currentJob.description}</p>
            <p className="font-light"><strong>Requirements:</strong> {currentJob.requirements}</p>
            <p className="font-light"><strong>Salary Range:</strong> {currentJob.salaryRange}</p>
            <p className="font-light"><strong>Application Deadline:</strong> {currentJob.applicationDeadline}</p>
            <p className="font-light"><strong>Contact Email:</strong> {currentJob.contactEmail}</p>
            <p className="font-light"><strong>Posted Date:</strong> {currentJob.postedDate}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={closeDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddJob;
