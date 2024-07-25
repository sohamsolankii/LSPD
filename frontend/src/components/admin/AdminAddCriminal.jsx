import React, {useState} from 'react'
import {FaPlus, FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import axios from 'axios'
import toast from 'react-hot-toast'

const AdminAddCriminal = () => {
    const [criminals, setCriminals] = useState([])
    const [newCriminal, setNewCriminal] = useState({
        name: '',
        image: '',
        crime: '',
        location: '',
        details: '',
        crimeRate: '',
    })
    const [currentPage, setCurrentPage] = useState(1)
    const criminalsPerPage = 5

    const handleChange = (e) => {
        setNewCriminal({
            ...newCriminal,
            [e.target.name]: e.target.value,
        })
    }

    const handleAddCriminal = async () => {
        try {
            const response = await axios.post('/api/v1/criminal', newCriminal, {
                withCredentials: true,
            })
            toast.success('Criminal added successfully!')
            setCriminals([
                ...criminals,
                {...newCriminal, id: criminals.length + 1},
            ])
            setNewCriminal({
                name: '',
                image: '',
                crime: '',
                location: '',
                details: '',
                crimeRate: '',
            })
        } catch (error) {
            console.error('Error adding criminal:', error)
            toast.error('Failed to add criminal.')
        }
    }

    const handleDelete = (criminalId) => {
        setCriminals(criminals.filter((criminal) => criminal.id !== criminalId))
    }

    const indexOfLastCriminal = currentPage * criminalsPerPage
    const indexOfFirstCriminal = indexOfLastCriminal - criminalsPerPage
    const currentCriminals = criminals.slice(
        indexOfFirstCriminal,
        indexOfLastCriminal,
    )

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
    }

    const nextPage = () => {
        setCurrentPage((prevPage) =>
            Math.min(
                prevPage + 1,
                Math.ceil(criminals.length / criminalsPerPage),
            ),
        )
    }

    return (
        <div className="p-4 md:p-6 poppins dark:bg-gray-100 bg-[var(--bg2)] min-h-screen">
            <div className="mb-6 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] shadow-2xl">
                <h2 className="text-2xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center dark:shadow-black/10 shadow-black/70 dark:bg-gray-100 dark:border-gray-400 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
                    Add Criminal
                </h2>
                <form
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 p-5"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {[
                        {
                            label: 'Name',
                            name: 'name',
                            type: 'text',
                            placeholder: 'Name',
                        },
                        {
                            label: 'Image URL',
                            name: 'image',
                            type: 'text',
                            placeholder: 'Image URL',
                        },
                        {
                            label: 'Crimes',
                            name: 'crime',
                            type: 'text',
                            placeholder: 'Crimes (comma separated)',
                        },
                        {
                            label: 'Location',
                            name: 'location',
                            type: 'text',
                            placeholder: 'Location',
                        },
                        {
                            label: 'Details',
                            name: 'details',
                            type: 'textarea',
                            placeholder: 'Details',
                        },
                        {
                            label: 'Crime Rate',
                            name: 'crimeRate',
                            type: 'number',
                            placeholder: 'Crime Rate',
                        },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-sm text-gray-500 pb-2">
                                {field.label}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    name={field.name}
                                    value={newCriminal[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[80px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
                                    required
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={newCriminal[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="p-2 px-5 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--bg4op)] dark:bg-[var(--bg1l)] backdrop-blur-md shadow-black/30 hover:shadow-black/40 hover:bg-[var(--opac)] hover:dark:bg-[var(--bg1)] shadow-md hover:shadow-xl text-gray-200 flex items-center justify-center"
                            onClick={handleAddCriminal}
                        >
                            Add Criminal <FaPlus className="ml-2" />
                        </button>
                    </div>
                </form>
            </div>

            <div className="mb-6 dark:bg-gray-100 dark:border-gray-400 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
                <h2 className="text-2xl rounded-xl z-10 font-medium dark:bg-gray-100 dark:border-gray-400 m-2 p-2 text-[var(--lgold)] text-center dark:text-[var(--dltext)] bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
                    Criminal List
                </h2>
                <ul className="p-5 space-y-2">
                    {currentCriminals.map((criminal) => (
                        <li
                            key={criminal.id}
                            className="flex justify-between items-center p-2 border-b border-[var(--opac)] dark:border-gray-300"
                        >
                            <div>
                                <h3 className="font-semibold text-lg text-gray-200 dark:text-gray-900">
                                    {criminal.name}
                                </h3>
                                <p className="text-gray-500 text-sm dark:text-gray-600">
                                    {criminal.location}
                                </p>
                            </div>
                            <button
                                className="text-red-600 hover:text-red-800 border-[1px] border-red-600 hover:border-red-800 px-2 rounded-md"
                                onClick={() => handleDelete(criminal.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex p-4">
                    <button
                        className="bg-yellow-200 text-gray-800 dark:text-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:shadow-none shadow-black/70 shadow-lg hover:dark:bg-blue-700 p-2 mr-3 rounded-full"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        className="bg-yellow-200 text-gray-800 dark:text-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:shadow-none shadow-black/70 shadow-lg hover:dark:bg-blue-700 p-2 rounded-full"
                        onClick={nextPage}
                        disabled={
                            currentPage ===
                            Math.ceil(criminals.length / criminalsPerPage)
                        }
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminAddCriminal
