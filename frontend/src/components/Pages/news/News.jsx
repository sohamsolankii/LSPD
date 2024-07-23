import React, {useState, useEffect} from 'react'
import {FaThumbsUp, FaCommentAlt, FaArrowLeft} from 'react-icons/fa'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const News = () => {
    const [articles, setArticles] = useState([])
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [comment, setComment] = useState('')
    const [fetchComment, setFetchComments] = useState([])

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

    const fetchComments = async (id) => {
        try {
            const response = await axios.get(
                `/api/v1/comment/fetch-comment/${id}`,
            )
            console.log(response)
            setFetchComments(response.data.data)
        } catch (err) {
            console.log(err.message)
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
        try {
            await axios.post(`/api/v1/like/${id}`, {}, {withCredentials: true})
            setArticles(
                articles.map((article) =>
                    article.id === id
                        ? {...article, likes: article.likes + 1}
                        : article,
                ),
            )
        } catch (error) {
            toast.error('Error liking article.')
        }
    }

    const handleComment = async (id) => {
        if (comment.trim() === '') return

        try {
            const res = await axios.post(
                `/api/v1/comment/add-comment/${id}`,
                {comment},
                {withCredentials: true},
            )
            fetchComments(id)
            console.log(res)

            toast.success('Comment added successfully!')

            setComment('')
        } catch (error) {
            toast.error('Error adding comment.')
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
                            {selectedArticle.content}
                        </div>
                    </div>
                    <div className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-gray-200 dark:border-gray-600">
                        <button
                            onClick={() => handleLike(selectedArticle.id)}
                            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                        >
                            <FaThumbsUp className="mr-2" />
                            {selectedArticle.likes}
                        </button>
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
                                {comment.user.name}
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
                                    <div className="flex mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center mr-4">
                                            <FaThumbsUp className="mr-1" />
                                            {article.likes}
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
