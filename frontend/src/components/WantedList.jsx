import React, {useState} from 'react'
import StarRating from './UsedComponents/StarRating.jsx'
import * as FaIcons from 'react-icons/fa'

const criminalsList = [
    {
        id: 1,
        name: 'Micheal DeSanta',
        image: '/src/assets/criminal.jpg',
        crime: ['Murder', 'Theft', 'Robbery'],
        location: 'New York',
        details: 'Develop and maintain software applications.',
        crimeRate: 4.5,
    },
    {
        id: 2,
        name: 'Trevor Philips',
        image: '/src/assets/trevor.png',
        crime: ['Murder', 'Theft', 'Robbery'],
        location: 'New York',
        details: 'Develop and maintain software applications.',
        crimeRate: 0.5,
    },
    {
        id: 3,
        name: 'Franklin Clinton',
        image: '/src/assets/criminal.jpg',
        crime: ['Murder', 'Theft', 'Robbery'],
        location: 'New York',
        details: 'Develop and maintain software applications.',
        crimeRate: 5,
    },
    {
        id: 4,
        name: 'Lester Crest',
        image: '/src/assets/trevor.png',
        crime: ['Murder', 'Theft', 'Robbery'],
        location: 'New York',
        details: 'Develop and maintain software applications.',
        crimeRate: 1,
    },
    {
        id: 5,
        name: 'Lamar Davis',
        image: '/src/assets/criminal.jpg',
        crime: ['Murder', 'Theft', 'Robbery'],
        location: 'New York',
        details: 'Develop and maintain software applications.',
        crimeRate: 2,
    },
    {
        id: 6,
        name: 'Steve Haines',
        image: '/src/assets/trevor.png',
        crime: ['Murder', 'Theft', 'Robbery'],
        location: 'New York',
        details: 'Develop and maintain software applications.',
        crimeRate: 3,
    },
    {
        id: 7,
        name: 'Dave Norton',
        image: '/src/assets/criminal.jpg',
        crime: ['Murder', 'Theft', 'Robbery'],
        location: 'New York',
        details: 'Develop and maintain software applications.',
        crimeRate: 4,
    },
    {
        id: 8,
        name: 'Ron Jakowski',
        image: '/src/assets/trevor.png',
        crime: ['Murder', 'Theft', 'Robbery'],
        location: 'New York',
        details: 'Develop and maintain software applications.',
        crimeRate: 2.5,
    },
]

const criminals = criminalsList.sort((a, b) => b.crimeRate - a.crimeRate)

const Wanted = () => {
    const [search, setSearch] = useState('')
    const [selectedCriminal, setSelectedCriminal] = useState(null)

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSeeMore = (criminal) => {
        setSelectedCriminal(criminal)
    }

    const handleCloseDetails = () => {
        setSelectedCriminal(null)
    }

    const filteredCriminals = criminals.filter((criminal) =>
        criminal.name.toLowerCase().includes(search.toLowerCase()),
    )

    return (
        <div className="p-4 md:p-6 min-h-screen poppins bg-cover dark:bg-gray-100 bg-[var(--bg2)]">
            <div className="mb-6 rounded-2xl shadow-black/70 dark:shadow-black/10 dark:bg-gray-100 dark:border-gray-400 border-[var(--opac)] ">
                <h2 className="text-2xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center dark:shadow-black/10 shadow-black/70  dark:bg-gray-100   ">
                    Most Wanted Criminals
                </h2>

                <div className="md:p-5 p-3">
                    <div className="flex flex-col md:flex-row gap-4 mb-5">
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-md text-gray-200 pb-2 dark:text-black">
                                Search
                            </label>
                            <input
                                type="text"
                                placeholder="Search by name"
                                value={search}
                                onChange={handleSearchChange}
                                className="p-4  rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md    text-gray-200 dark:text-[var(--dltext)]"
                            />
                        </div>
                    </div>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-[90%] h-px my-8 bg-[var(--lgold)] border-0 dark:bg-[var(--dltext)]" />
                        <span className="absolute invisible md:visible px-3 font-medium text-[var(--lgold)] -translate-x-1/2 bg-[var(--bg2)] left-1/2 text-xl dark:text-[var(--dltext)] dark:bg-gray-100">
                            Never forget their faces
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                        {filteredCriminals.map((criminal) => (
                            <div
                                key={criminal.id}
                                className="md:p-4 p-3 bg-[var(--opac)] dark:bg-gray-100 border-[1px] border-[var(--opac)] dark:border-gray-300 rounded-lg shadow-black/30 dark:shadow-none shadow-md transition transform hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <img
                                    className="text-sm text-gray-500 w-full md:h-72 h-48 mb-3 object-cover object-top dark:text-gray-600 rounded-md"
                                    src={criminal.image}
                                    alt={criminal.name}
                                />
                                <h3 className="md:text-lg text-md font-semibold text-gray-200 dark:text-[var(--dltext)] mb-2">
                                    {criminal.name}
                                </h3>
                                <div className="md:text-md text-sm font-regular mt-2 text-gray-200 dark:text-[var(--dltext)]">
                                    <StarRating
                                        crimeRate={criminal.crimeRate}
                                    />
                                </div>
                                <button
                                    onClick={() => handleSeeMore(criminal)}
                                    className="mt-4 text-blue-500 border-blue-500 border-[1px] rounded-md px-4 py-2 text-sm hover:text-blue-700 hover:border-blue-700 transition-colors"
                                >
                                    See More
                                    <FaIcons.FaChevronDown className="inline ml-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedCriminal && (
                <div className="fixed inset-0 text-gray-300 dark:text-gray-600 flex items-center justify-center z-10">
                    <div className="bg-[var(--bg1lop)] dark:bg-[var(--opac)] backdrop-blur-3xl border-[1px] border-[var(--opac)] animate           appear blockanim dark:border-gray-400 md:p-6 p-3 rounded-xl lg:w-[85%] shadow-black/80 dark:shadow-black/40 shadow-2xl w-[94%]">
                        <h2 className="text-xl font-medium mb-2 text-center">
                            Criminal Details
                        </h2>
                        <div className="flex items-center grid gap-4 md:grid-cols-3 grid-cols-1 justify-center rounded-lg p-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaUserTie />
                                </div>
                                <div>
                                    <p className="font-light text-xs">Name</p>
                                    <p className="md:text-lg text-md">
                                        {selectedCriminal.name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaUserTag />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Crime Rate
                                    </p>
                                    <StarRating
                                        crimeRate={selectedCriminal.crimeRate}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaLocationArrow />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Location
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedCriminal.location}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaInfoCircle />
                                </div>
                                <div>
                                    <p className="font-light text-xs">
                                        Details
                                    </p>
                                    <p className="md:text-lg text-md">
                                        {selectedCriminal.details}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 border-[1px] dark:border-gray-400 flex justify-center items-center rounded-full">
                                    <FaIcons.FaTasks />
                                </div>
                                <div>
                                    <p className="font-light text-xs">Crimes</p>
                                    <p className="md:text-lg text-md">
                                        {selectedCriminal.crime.join(', ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="mt-4 text-white bg-red-700 px-6 py-2 shadow-black/40 hover:text-white  rounded-md hover:bg-red-500"
                            onClick={handleCloseDetails}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Wanted
