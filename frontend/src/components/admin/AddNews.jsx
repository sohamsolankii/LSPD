import React, {useState, useEffect} from 'react'
import {FaPlus} from 'react-icons/fa'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

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

    const addNews = async (e) => {
        e.preventDefault()
        console.log(newNews)
        try {
            const formData = new FormData()
            formData.append('image', newNews.image)
            formData.append('title', newNews.title)
            formData.append('description', newNews.description)

            const resposne = await axios.post(
                '/api/v1/announcement',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
                {
                    withCredentials: true,
                },
            )

            toast.success('New news added successfully')
        } catch (err) {
            console.log(err.message)
        } finally {
            setNewNews({
                image: null,
                title: '',
                description: '',
            })
        }
    }

    // useEffect(() => {

    // }, [])

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

    return (
        <div className="p-4 md:p-6 min-h-screen poppins dark:bg-gray-100 bg-[var(--bg2)]">
            <div className="mb-6 rounded-2xl shadow-black/70 dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] shadow-2xl">
                <h2 className="text-2xl rounded-xl font-medium m-2 p-2 text-[var(--lgold)] dark:text-[var(--dltext)] text-center dark:shadow-black/10 shadow-black/70 dark:bg-gray-100 dark:border-gray-400 bg-[var(--bg1)] border-[1px] border-[var(--opac)] shadow-2xl">
                    {isEditing ? 'Edit News' : 'Add News'}
                </h2>
                <form
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 p-5"
                    onSubmit={addNews}
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
        </div>
    )
}

export default AddNews
