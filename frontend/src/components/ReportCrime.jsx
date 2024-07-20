import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const ReportCrime = () => {
  const [complaints, setComplaints] = useState([]);
  const [newComplaint, setNewComplaint] = useState({
    user: '',
    complaint: '',
    location: '',
    description: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentComplaint, setCurrentComplaint] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setNewComplaint({
      ...newComplaint,
      [e.target.name]: e.target.value,
    });
  };

  const handleReportCrime = () => {
    if (isEditing) {
      setComplaints(complaints.map((complaint) => (complaint.id === currentComplaint.id ? newComplaint : complaint)));
      setIsEditing(false);
      setCurrentComplaint(null);
    } else {
      setComplaints([...complaints, { ...newComplaint, id: complaints.length + 1 }]);
    }
    setNewComplaint({
      user: '',
      complaint: '',
      location: '',
      description: ''
    });
  };

  const handleEdit = (complaint) => {
    setIsEditing(true);
    setCurrentComplaint(complaint);
    setNewComplaint(complaint);
  };

  const handleDelete = (complaintId) => {
    setComplaints(complaints.filter((complaint) => complaint.id !== complaintId));
  };

  const handleDetails = (complaint) => {
    setCurrentComplaint(complaint);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setCurrentComplaint(null);
  };

  return (
    <div className="p-4 md:p-6 poppins min-h-screen dark:bg-gray-100 bg-[var(--bg2)]">
      <div className="mb-6 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] shadow-2xl">
        <h2 className="text-2xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center dark:shadow-black/10 shadow-black/70 dark:bg-gray-100 dark:border-gray-400 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
          {isEditing ? 'Edit Complaint' : 'Add Complaint'}
        </h2>
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2 p-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 pb-2">Enter User ID</label>
            <input
              type="text"
              name="user"
              value={newComplaint.user}
              onChange={handleChange}
              placeholder="User ID"
              className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 pb-2">Enter the complaint</label>
            <input
              type="text"
              name="complaint"
              value={newComplaint.complaint}
              onChange={handleChange}
              placeholder="Complaint"
              className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 pb-2">Enter the location</label>
            <input
              type="text"
              name="location"
              value={newComplaint.location}
              onChange={handleChange}
              placeholder="Location"
              className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
              required
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-500 pb-2">Provide a description</label>
            <textarea
              name="description"
              value={newComplaint.description}
              onChange={handleChange}
              placeholder="Description"
              className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[80px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="p-2 px-5 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--bg4op)] dark:bg-[var(--bg1l)] backdrop-blur-md shadow-black/30 hover:shadow-black/40 hover:bg-[var(--opac)] hover:dark:bg-[var(--bg1)] shadow-md hover:shadow-xl text-gray-200 flex items-center justify-center"
              onClick={handleReportCrime}
            >
              {isEditing ? 'Update Complaint' : 'Add Complaint'} <FaPlus className="ml-2" />
            </button>
          </div>
        </form>
      </div>
      {showDetails && currentComplaint && (
        <div className="mb-6 p-5 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
          <h2 className="text-2xl mb-4 font-medium text-[var(--lgold)] dark:text-[var(--dltext)] text-center">Complaint Details</h2>
          <div className="text-gray-200">
            <p><strong>User ID:</strong> {currentComplaint.user}</p>
            <p><strong>Complaint:</strong> {currentComplaint.complaint}</p>
            <p><strong>Location:</strong> {currentComplaint.location}</p>
            <p><strong>Description:</strong> {currentComplaint.description}</p>
          </div>
          <button
            onClick={closeDetails}
            className="mt-4 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--bg4op)] dark:bg-[var(--bg1l)] backdrop-blur-md shadow-black/30 hover:shadow-black/40 hover:bg-[var(--opac)] hover:dark:bg-[var(--bg1)] shadow-md hover:shadow-xl text-gray-200 p-2"
          >
            Close
          </button>
        </div>
      )}
      <div className="mb-6 dark:bg-gray-100 dark:border-gray-400 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
        <h2 className="text-2xl rounded-xl z-10 font-medium dark:bg-gray-100 dark:border-gray-400 m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">Current Complaints</h2>
        <table className="min-w-full mb-4 rounded-md shadow-black/30 text-sm md:text-lg text-gray-200">
          <thead>
            <tr>
              <th className="py-2 font-medium text-gray-500">User ID</th>
              <th className="py-2 font-medium text-gray-500">Complaint</th>
              <th className="py-2 font-medium text-gray-500">Location</th>
              <th className="py-2 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td className="border-[1px] border-[var(--opac)] dark:border-gray-300 font-regular text-gray-300 dark:text-gray-500 px-4 py-2">{complaint.user}</td>
                <td className="border-[1px] border-[var(--opac)] dark:border-gray-300 font-regular text-gray-300 dark:text-gray-500 px-4 py-2">{complaint.complaint}</td>
                <td className="border-[1px] border-[var(--opac)] dark:border-gray-300 font-regular text-gray-300 dark:text-gray-500 px-4 py-2">{complaint.location}</td>
                <td className="border-[1px] border-[var(--opac)] dark:border-gray-300 font-regular text-gray-300 dark:text-gray-500 px-4 py-2">
                  <button
                    onClick={() => handleEdit(complaint)}
                    className="border-blue-500 border-[1px] text-sm text-blue-500 hover:text-blue-700 px-2 py-1 mx-1 hover:border-blue-700 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(complaint.id)}
                    className="border-red-500 border-[1px] text-sm text-red-500 hover:text-red-700 px-2 py-1 mx-1 hover:border-red-700 rounded-md"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleDetails(complaint)}
                    className="border-gray-500 border-[1px] text-sm text-gray-500 hover:text-gray-700 px-2 py-1 mx-1 hover:border-gray-700 rounded-md"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportCrime;
