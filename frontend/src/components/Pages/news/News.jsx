import React, {useState, useEffect, useContext} from 'react'
import {
    FaThumbsUp,
    FaCommentAlt,
    FaArrowLeft,
    FaThumbsDown,
} from 'react-icons/fa'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {UserContext} from '../../../context/userContext'
import {useNavigate} from 'react-router-dom'

const News = () => {
    const [articles, setArticles] = useState([])
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [comment, setComment] = useState('')
    const [fetchComment, setFetchComments] = useState([])
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    const fetchArticles = async () => {
        try {
            const response = await axios.get('/api/v1/announcement')
            setArticles(response.data.data)
        } catch (error) {
            console.error('Error fetching articles:', error)
        }
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchSpecificArticle = async (id) => {
        try {
            const response = await axios.get(`/api/v1/announcement/watch/${id}`)
            setSelectedArticle(response.data.data)
        } catch (error) {
            console.error('Error fetching article:', error)
        }
    }

    const fetchComments = async (id) => {
        try {
            const response = await axios.get(
                `/api/v1/comment/fetch-comment/${id}`,
            )
            setFetchComments(response.data.data)
        } catch (err) {
            console.error('Error fetching comments:', err.message)
        }
    }

    const handleClick = (article) => {
        fetchComments(article._id)
        setSelectedArticle(article)
    }

    const handleBack = () => {
        setSelectedArticle(null)
    }

    const handleLike = async (id) => {
		if(!user){
			toast.error('You Have to login first!')
            navigate('/login')
		}else{
			try {
                const response = await axios.get(
                    `/api/v1/announcement/add-like/${id}`,
                    {
                        withCredentials: true,
                    },
                )
                toast.success('Article liked successfully!')
                fetchSpecificArticle(id) // Update the specific article after like
            } catch (error) {
                toast.error('Error liking article.')
                console.error('Error liking article:', error)
            } finally {
                fetchArticles() // Fetch all articles to update the list
            }
		}
    }
    const handledislike = async (id) => {
		if (!user) {
            toast.error('You Have to login first!')
            navigate('/login')
        } else{
			try {
                const response = await axios.get(
                    `/api/v1/announcement/add-dislike/${id}`,
                    {
                        withCredentials: true,
                    },
                )
                toast.success('Article liked successfully!')
                fetchSpecificArticle(id) // Update the specific article after like
            } catch (error) {
                toast.error('Error liking article.')
                console.error('Error liking article:', error)
            } finally {
                fetchArticles() // Fetch all articles to update the list
            }
		}
    }

    const handleComment = async (id) => {
		if (!user) {
            toast.error('You Have to login first!')
            navigate('/login')
        } else{
			if (comment.trim() === '') return

            try {
                const res = await axios.post(
                    `/api/v1/comment/add-comment/${id}`,
                    {comment},
                    {withCredentials: true},
                )
                fetchComments(id)
                toast.success('Comment added successfully!')
                setComment('')
            } catch (error) {
                toast.error('Error adding comment.')
                console.error('Error adding comment:', error)
            }
		}
    }

    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
            {selectedArticle ? (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4 md:p-6 flex items-center justify-between bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                        <button
                            onClick={handleBack}
                            className="flex items-center p-2 px-4 border border-gray-300 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition"
                        >
                            <FaArrowLeft className="mr-2" />
                            Back to News
                        </button>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            {selectedArticle.title}
                        </h2>
                    </div>
                    <div className="p-4 md:p-6">
                        <img
                            src={selectedArticle.image}
                            alt={selectedArticle.headline}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                        <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                            {selectedArticle.description}
                        </div>
                    </div>
                    <div className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-gray-200 dark:border-gray-600">
                        <div className="flex space-x-4 justify-between">
                            <button
                                onClick={() => handleLike(selectedArticle._id)}
                                className="flex items-center bg-blue-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                            >
                                <FaThumbsUp className="mr-2" />
                                {selectedArticle.likes}
                            </button>
                            <button
                                onClick={() =>
                                    handledislike(selectedArticle._id)
                                }
                                className="flex items-center bg-red-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition"
                            >
                                <FaThumbsDown className="mr-2" />
                                {selectedArticle.dislikes}
                            </button>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center">
                            <input
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Add a comment"
                                className="rounded-l-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 border border-gray-300 dark:border-gray-600"
                            />
                            <button
                                onClick={() =>
                                    handleComment(selectedArticle._id)
                                }
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-full flex items-center shadow-md hover:bg-blue-600 transition"
                            >
                                <FaCommentAlt className="mr-2" />
                                Comment
                            </button>
                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                        {fetchComment.map((comment) => (
                            <div
                                key={comment._id}
                                className="border-b border-gray-200 dark:border-gray-600 py-2"
                            >
                                <strong>{comment.user.name}</strong>:{' '}
                                {comment.comment}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                            News and Alerts
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                            Stay updated with all news of Los Santos!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <div
                                key={article._id}
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                                onClick={() => handleClick(article)}
                            >
                                <img
                                    src={article.image}
                                    alt={article.headline}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                        {article.title}
                                    </h3>
                                    <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex justify-between">
                                            <div className="flex items-center mr-4">
                                                <FaThumbsUp className="mr-1" />
                                                {article.likes}
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <FaThumbsDown className="mr-1" />
                                                {article.dislikes}
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <FaCommentAlt className="mr-1" />
                                            {article.comments.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default News
