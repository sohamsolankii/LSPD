import React, {useEffect, useState} from 'react'
import axios from 'axios'

const JobApplication = () => {
    const [data, setData] = useState([])

    const fetchApplications = async () => {
        try {
            const response = await axios.get(
                '/api/v1/application/fetch-application',
                {
                    withCredentials: true,
                },
            )
            console.log(response.data.data)
            setData(response.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchApplications()
    }, [])

    const applicationControl = async (id, type) => {
        try {
            const response = await axios.get(
                `/api/v1/application/${type}-application/${id}`,
            )
            fetchApplications()
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="p-5 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-5">
                Job Applications
            </h1>
            {data.map((application) => (
                <div
                    key={application._id}
                    className="bg-white p-5 rounded-lg shadow-md mb-5"
                >
                    <div className="mb-5">
                        <h2 className="text-xl font-semibold mb-2">
                            Application ID: {application._id}
                        </h2>
                        <p className="mb-1">
                            <strong>Name:</strong> {application.user.name}
                        </p>
                        <p className="mb-1">
                            <strong>Title:</strong> {application.job[0].title}
                        </p>
                        <p className="mb-1">
                            <strong>Location:</strong>{' '}
                            {application.job[0].location}
                        </p>
                        <p className="mb-1">
                            <strong>Type:</strong> {application.job[0].jobType}
                        </p>
                        <p className="mb-1">
                            <strong>Description:</strong>{' '}
                            {application.job[0].description}
                        </p>
                        <p className="mb-1">
                            <strong>Requirements:</strong>{' '}
                            {application.job[0].requirements[0]}
                        </p>
                        <p className="mb-1">
                            <strong>Salary:</strong>{' '}
                            {application.job[0].salaryRange}
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <button
                            onClick={() =>
                                applicationControl(application._id, 'approve')
                            }
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Approve Application
                        </button>
                        <button
                            onClick={() =>
                                applicationControl(
                                    application._id,
                                    'disapprove',
                                )
                            }
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            Disapprove Application
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobApplication
