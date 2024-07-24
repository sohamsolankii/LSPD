import React, {useState, useEffect} from 'react'
import {FaPlus} from 'react-icons/fa'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const AddNews = () => {
    const {register, handleSubmit, reset} = useForm()
    const [news, setNews] = useState([])
    const [newNews, setNewNews] = useState({
        image: null,
        title: '',
        description: '',
    })
    const [isEditing, setIsEditing] = useState(false)
    const [currentNews, setCurrentNews] = useState(null)
    const [showDetails, setShowDetails] = useState(false)

    //   useEffect(() => {
    //     // Fetch the existing news from the API
    //     const fetchNews = async () => {
    //       try {
    //         const response = await axios.get('/api/news');
    //         setNews(response.data);
    //       } catch (error) {
    //         console.error('Error fetching news:', error);
    //       }
    //     };
    //     fetchNews();
    //   }, []);

    const handleChange = (e) => {
        setNewNews({
            ...newNews,
            [e.target.name]: e.target.value,
        })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setNewNews({
            ...newNews,
            image: file,
        })
    }

    const handleAddNews = async () => {
        try {
            const formData = new FormData()
            formData.append('image', newNews.image)
            formData.append('title', newNews.title)
            formData.append('description', newNews.description)

            if (isEditing) {
                const response = await axios.put(
                    `/api/news/${currentNews.id}`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    },
                )
                setNews(
                    news.map((newsItem) =>
                        newsItem.id === currentNews.id
                            ? response.data
                            : newsItem,
                    ),
                )
                setIsEditing(false)
                setCurrentNews(null)
            } else {
                const response = await axios.post('/api/news', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                setNews([...news, response.data])
            }

            reset()
            setNewNews({
                image: null,
                title: '',
                description: '',
            })
        } catch (error) {
            console.error('Error adding/updating news:', error)
        }
    }

    const handleEdit = (newsItem) => {
        setIsEditing(true)
        setCurrentNews(newsItem)
        setNewNews(newsItem)
    }

    const handleDelete = async (newsId) => {
        try {
            await axios.delete(`/api/news/${newsId}`)
            setNews(news.filter((newsItem) => newsItem.id !== newsId))
        } catch (error) {
            console.error('Error deleting news:', error)
        }
    }

    const handleShowDetails = (newsItem) => {
        setCurrentNews(newsItem)
        setShowDetails(true)
    }

    const closeDetails = () => {
        setShowDetails(false)
        setCurrentNews(null)
    }

    return (
        <div className="p-4 md:p-6 min-h-screen poppins dark:bg-gray-100 bg-[var(--bg2)]">
            <div className="mb-6 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] shadow-2xl">
                <h2 className="text-2xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center dark:shadow-black/10 shadow-black/70 dark:bg-gray-100 dark:border-gray-400 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
                    {isEditing ? 'Edit News' : 'Add News'}
                </h2>
                <form
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 p-5"
                    onSubmit={handleSubmit(handleAddNews)}
                >
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 pb-2">
                            Upload Image
                        </label>
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                {...register('image')}
                                onChange={handleImageChange}
                                id="file-input"
                                className="hidden"
                                required={!isEditing}
                            />
                            <label
                                htmlFor="file-input"
                                className="cursor-pointer p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)] flex "
                            >
                                <p className="bg-[var(--opac)] dark:bg-gray-100 border-[1px] text-xs md:px-3 px-1 p-1 border-[var(--opac)] dark:border-gray-300 rounded-sm shadow-md">
                                    Choose File
                                </p>
                            </label>
                        </div>

                        {newNews.image && (
                            <img
                                src={URL.createObjectURL(newNews.image)}
                                alt="Uploaded"
                                className="mt-2 h-40 object-contain"
                            />
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 pb-2">
                            Enter the news title
                        </label>
                        <input
                            type="text"
                            {...register('title', {required: true})}
                            value={newNews.title}
                            onChange={handleChange}
                            placeholder="News Title"
                            className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
                            required
                        />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <label className="text-sm text-gray-500 pb-2">
                            Provide the news description
                        </label>
                        <textarea
                            {...register('description', {required: true})}
                            value={newNews.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="p-2 border-[1px] border-[var(--opac)] dark:border-gray-300 h-[40px] rounded-md bg-[var(--opac)] dark:bg-gray-100 backdrop-blur-md shadow-black/30 dark:shadow-none shadow-md text-gray-200 dark:text-[var(--dltext)]"
                            required
                        />
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="p-2 px-5 border-[1px] border-[var(--opac)] h-[40px] rounded-md bg-[var(--bg4op)] dark:bg-[var(--bg1l)] backdrop-blur-md shadow-black/30 hover:shadow-black/40 hover:bg-[var(--opac)] hover:dark:bg-[var(--bg1)] shadow-md hover:shadow-xl text-gray-200 flex items-center justify-center"
                        >
                            {isEditing ? 'Update News' : 'Add News'}{' '}
                            <FaPlus className="ml-2" />
                        </button>
                    </div>
                </form>
            </div>

            <div className="mb-6 dark:bg-gray-100 dark:border-gray-400 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
                <h2 className="text-2xl rounded-xl z-10 font-medium dark:bg-gray-100 dark:border-gray-400 m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
                    Current News
                </h2>
                <table className="min-w-full mb-4 rounded-md shadow-black/30 text-sm md:text-lg text-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 font-medium text-gray-500">
                                News Title
                            </th>
                            <th className="py-2 font-medium text-gray-500">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.map((newsItem) => (
                            <tr key={newsItem.id}>
                                <td className="border-[1px] border-[var(--opac)] dark:border-gray-300 font-regular text-gray-300 dark:text-gray-500 px-4 py-2">
                                    {newsItem.title}
                                </td>
                                <td className="border-[1px] border-[var(--opac)] dark:border-gray-300 font-regular text-gray-300 dark:text-gray-500 px-4 py-2">
                                    <button
                                        onClick={() =>
                                            handleShowDetails(newsItem)
                                        }
                                        className="border-green-500 border-[1px] text-sm text-green-500 hover:text-green-700 px-2 py-1 mx-1 hover:border-green-700 rounded-md"
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={() => handleEdit(newsItem)}
                                        className="border-blue-500 border-[1px] text-sm text-blue-500 hover:text-blue-700 px-2 py-1 mx-1 hover:border-blue-700 rounded-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(newsItem.id)
                                        }
                                        className="border-red-500 border-[1px] text-sm text-red-500 hover:text-red-700 px-2 py-1 mx-1 hover:border-red-700 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showDetails && currentNews && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">
                            {currentNews.title}
                        </h3>
                        {currentNews.image && (
                            <img
                                src={currentNews.image}
                                alt={currentNews.title}
                                className="mb-4"
                            />
                        )}
                        <p className="mb-4">{currentNews.description}</p>
                        <button
                            onClick={closeDetails}
                            className="border-[1px] border-gray-500 text-sm text-gray-500 hover:text-gray-700 px-4 py-2 hover:border-gray-700 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddNews
