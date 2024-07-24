import React, {useState} from 'react'

const AdminShowReport = () => {
    // Temporary data for complaints with descriptions and locations
    const complaints = [
        {
            report: 'Complaint about service quality.',
            description: 'The service was not up to the expected standards.',
            location: 'New York, NY',
            user: {name: 'Jane Smith'},
        },
        {
            report: 'Issue with product delivery.',
            description: 'The product arrived late and was damaged.',
            location: 'Los Angeles, CA',
            user: {name: 'Tom Brown'},
        },
        {
            report: 'Request for a refund not processed.',
            description: 'Refund requested but not processed for weeks.',
            location: 'Chicago, IL',
            user: {name: 'Alice Johnson'},
        },
        {
            report: 'Poor customer support experience.',
            description: 'Customer support was unresponsive and unhelpful.',
            location: 'Houston, TX',
            user: null, // Anonymous user
        },
        {
            report: 'Complaint about service quality.',
            description: 'The service was not up to the expected standards.',
            location: 'New York, NY',
            user: {name: 'Jane Smith'},
        },
        {
            report: 'Issue with product delivery.',
            description: 'The product arrived late and was damaged.',
            location: 'Los Angeles, CA',
            user: {name: 'Tom Brown'},
        },
        {
            report: 'Request for a refund not processed.',
            description: 'Refund requested but not processed for weeks.',
            location: 'Chicago, IL',
            user: {name: 'Alice Johnson'},
        },
        {
            report: 'Poor customer support experience.',
            description: 'Customer support was unresponsive and unhelpful.',
            location: 'Houston, TX',
            user: null, // Anonymous user
        },
        {
            report: 'Complaint about service quality.',
            description: 'The service was not up to the expected standards.',
            location: 'New York, NY',
            user: {name: 'Jane Smith'},
        },
        {
            report: 'Issue with product delivery.',
            description: 'The product arrived late and was damaged.',
            location: 'Los Angeles, CA',
            user: {name: 'Tom Brown'},
        },
        {
            report: 'Request for a refund not processed.',
            description: 'Refund requested but not processed for weeks.',
            location: 'Chicago, IL',
            user: {name: 'Alice Johnson'},
        },
        {
            report: 'Poor customer support experience.',
            description: 'Customer support was unresponsive and unhelpful.',
            location: 'Houston, TX',
            user: null, // Anonymous user
        },
        // Add more complaints as needed
    ]

    // State for managing pagination
    const [currentPage, setCurrentPage] = useState(1)
    const complaintsPerPage = 5

    // Calculate the indices for the current page
    const indexOfLastComplaint = currentPage * complaintsPerPage
    const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage
    const currentComplaints = complaints.slice(
        indexOfFirstComplaint,
        indexOfLastComplaint,
    )

    // Function to handle page navigation
    const nextPage = () => {
        if (currentPage < Math.ceil(complaints.length / complaintsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className="bg-[var(--bg2)] poppins dark:bg-[var(--dbg2)] p-3 md:p-7 min-h-screen flex items-center justify-center">
            <div className="container bg-[var(--bg1)] dark:bg-[var(--dbg1)] mx-auto p-3 md:p-10 rounded-2xl shadow-black/70 border-[1px] border-[var(--opac)] shadow-2xl">
                <h1 className="text-2xl md:text-4xl pricedown font-bold text-[var(--lgold)] dark:text-[var(--dlgold)] mb-2 text-center">
                    All Reports
                </h1>
                <h2 className="text-sm md:text-xl poppins text-[var(--ltext)] dark:text-[var(--dltext)] mb-8 text-center">
                    Submitted by Users
                </h2>
                <div className="reports-list">
                    {currentComplaints.length === 0 ? (
                        <p className="text-center text-[var(--ltext)] dark:text-[var(--dltext)]">
                            No reports available
                        </p>
                    ) : (
                        currentComplaints.map((complaint, index) => (
                            <div
                                key={index}
                                className="mb-4 p-3 rounded-xl glassgrad2 border-[1px] border-[var(--opac)] shadow-black/20 shadow-lg backdrop-blur-sm dark:border-gray-700 bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] text-[var(--ltext)] dark:text-[var(--dlblue)]"
                            >
                                <p>{complaint.report}</p>
                                <p className="text-sm text-yellow-200 dark:text-blue-600">
                                    {complaint.description}
                                </p>

                                <p className="text-xs text-[var(--lblue)] dark:text-gray-800">
                                    {complaint.user
                                        ? complaint.user.name
                                        : 'Anonymous'}{' '}
                                    | {complaint.location}
                                </p>
                            </div>
                        ))
                    )}
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        className="bg-gray-300 text-gray-600 dark:text-gray-200 dark:bg-gray-600 p-2 rounded"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="bg-gray-300 text-gray-600 dark:text-gray-200 dark:bg-gray-600 p-2 rounded"
                        onClick={nextPage}
                        disabled={
                            currentPage ===
                            Math.ceil(complaints.length / complaintsPerPage)
                        }
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminShowReport
