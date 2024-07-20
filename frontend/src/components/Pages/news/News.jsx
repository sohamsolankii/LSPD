import React, {useState} from 'react'
import {FaThumbsUp, FaCommentAlt} from 'react-icons/fa'

const newsArticles = [
    {
        id: 1,
        headline: 'Heist Gone Wrong: LSPD in Pursuit of Suspects',
        image: '/src/assets/place.png',
        content: 'Detailed article content about Heist Gone Wrong.',
        likes: 0,
        comments: [],
    },
    {
        id: 2,
        headline: 'Los Santos Traffic Mayhem: Another Day, Another Crash',
        image: '/src/assets/place.png',
        content: `Los Santos, the bustling metropolis renowned for its dynamic urban life and scenic coastlines, is no stranger to traffic chaos. Yesterday marked another typical day of vehicular mayhem as a series of collisions brought parts of the city to a standstill.
The chaos began during the morning rush hour when a multi-car pileup occurred on the Del Perro Freeway, leading to extensive delays and gridlock that rippled across adjacent routes. Eyewitnesses reported reckless driving and excessive speeding as the primary causes, exacerbated by a sudden downpour that rendered roads slick and hazardous.
Emergency services were quick to respond, with LSPD officers and paramedics working tirelessly to manage the scene, assist the injured, and restore order. The accident, which involved over a dozen vehicles, resulted in several non-fatal injuries and significant property damage. Commuters expressed frustration and concern over the frequent traffic incidents plaguing the city.
Local authorities have reiterated the importance of adhering to traffic regulations and urged drivers to exercise caution, especially during adverse weather conditions. Plans to enhance traffic management and infrastructure are underway, aiming to mitigate such incidents in the future. Until then, Los Santos residents continue to navigate their city with a mix of caution and resilience, hoping for safer commutes ahead.
`,
        likes: 0,
        comments: [],
    },
    {
        id: 3,
        headline: 'Los Santos Traffic Mayhem: Another Day, Another Crash',
        image: '/src/assets/place.png',
        content: `Los Santos, the bustling metropolis renowned for its dynamic urban life and scenic coastlines, is no stranger to traffic chaos. Yesterday marked another typical day of vehicular mayhem as a series of collisions brought parts of the city to a standstill.
The chaos began during the morning rush hour when a multi-car pileup occurred on the Del Perro Freeway, leading to extensive delays and gridlock that rippled across adjacent and infrastructure are underway, aiming to mitigate such incidents in the future. Until then, Los Santos residents continue to navigate their city with a mix of caution and resilience, hoping for safer commutes ahead.
`,
        likes: 0,
        comments: [],
    },
    {
        id: 4,
        headline: 'Los Santos Traffic Mayhem: Another Day, Another Crash',
        image: '/src/assets/place.png',
        content: `Los Santos, the bustling metropolis renowned for its dynamic urban life and scenic coastlines, is no stranger to traffic chaos. Yesterday marked another typical day of vehicular mayhem as a series of collisions brought parts of the city to a standstill. tance of adhering to traffic regulations and urged drivers to exercise caution, especially during adverse weather conditions. Plans to enhance traffic management and infrastructure are underway, aiming to mitigate such incidents in the future. Until then, Los Santos residents continue to navigate their city with a mix of caution and resilience, hoping for safer commutes ahead.
`,
        likes: 0,
        comments: [],
    },
]

const News = () => {
    const [articles, setArticles] = useState(newsArticles)
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [comment, setComment] = useState('')

    const handleClick = (article) => {
        setSelectedArticle(article)
    }

    const handleBack = () => {
        setSelectedArticle(null)
    }

    const handleLike = (id) => {
        setArticles(
            articles.map((article) =>
                article.id === id
                    ? {...article, likes: article.likes + 1}
                    : article,
            ),
        )
    }

    const handleComment = (id) => {
        if (comment.trim() === '') return
        setArticles(
            articles.map((article) =>
                article.id === id
                    ? {...article, comments: [...article.comments, comment]}
                    : article,
            ),
        )
        setComment('')
    }

    return (
        <div className="w-full dark:bg-gray-100 bg-[var(--bg2)] mx-auto p-4 md:p-10 min-h-screen">
            {selectedArticle ? (
                <div>
                    <div className="max-w-[100%] mx-auto text-[var(--lgold)] dark:text-[var(--dltext)] overflow-hidden rounded-3xl shadow-black/70  dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] shadow-2xl">
                        <div className="block md:flex p-3">
                            <button
                                onClick={handleBack}
                                className="p-2 px-5 m-3 poppins border-[1px] border-[var(--opac)] rounded-md bg-[var(--bg4op)] dark:bg-[var(--bg1l)] backdrop-blur-md shadow-black/30 hover:shadow-black/40 hover:bg-[var(--opac)] hover:dark:bg-[var(--bg1)] shadow-md hover:shadow-xl text-gray-200 tems-center justify-center"
                            >
                                Back to News
                            </button>
                            <h2 className="md:text-4xl text-xl pricedown text-center m-2">
                                {selectedArticle.headline}
                            </h2>
                        </div>
                        <div className="px-2">
                            <img
                                src={selectedArticle.image}
                                alt={selectedArticle.headline}
                                className="md:w-[30%] md:p-0 p-4 w-[100%] rounded-lg md:m-5 m-0 float-none md:float-left"
                            />
                            <div className="p-4 poppins text-justify font-light text-sm md:text-lg text-gray-400 dark:text-[var(--dlblue)]">
                                <p>{selectedArticle.content}</p>
                            </div>
                        </div>
                        <div className="m-5 poppins text-sm max-w-[100%] text-[var(--lgold)] dark:text-[var(--dltext)] rounded-2xl shadow-black/70  dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] shadow-2xl">
                            <div className="md:flex m-5 block justify-center items-center">
                                <button
                                    onClick={() =>
                                        handleLike(selectedArticle.id)
                                    }
                                    className="bg-[var(--opac)] mr-10 mb-3 md:mb-0 text-white h-9 px-4 py-1 rounded-full flex items-center shadow-md hover:bg-blue-600 dark:bg-blue-400 hover:dark:bg-blue-800 transition duration-300 shadow-black/70 shadow-lg dark:shadow-black/20 border-y-[1px] border-[var(--opac2)] dark:border-blue-800"
                                >
                                    <FaThumbsUp className="mr-2" />
                                    {selectedArticle.likes}
                                </button>
                                <div className="items-center inline-flex">
                                    <input
                                        type="text"
                                        value={comment}
                                        onChange={(e) =>
                                            setComment(e.target.value)
                                        }
                                        placeholder="Add a comment"
                                        className="rounded-l-full bg-[var(--opac2)] dark:bg-[var(--ltext)] dark:text-[var(--bg1l)] text-gray-300 px-5 py-1 h-9 shadow-black/70 shadow-lg dark:shadow-black/20 border-y-[1px] border-[var(--opac2)] dark:border-blue-800"
                                    />
                                    <button
                                        onClick={() =>
                                            handleComment(selectedArticle.id)
                                        }
                                        className="bg-[var(--opac)] text-white h-9 px-4 py-1 rounded-r-full flex items-center shadow-md hover:bg-blue-600 dark:bg-blue-400 hover:dark:bg-blue-800 transition duration-300 shadow-black/70 shadow-lg dark:shadow-black/20 border-y-[1px] border-[var(--opac2)] dark:border-blue-800"
                                    >
                                        <FaCommentAlt className="mr-2" />
                                        Comment
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 p-4">
                                {selectedArticle.comments.map(
                                    (comment, index) => (
                                        <div
                                            key={index}
                                            className="border-b-[1px] border-[var(--opac)] dark:border-gray-400 py-2"
                                        >
                                            {comment}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen">
                    <div className="md:p-6 md:m-6 p-2 m-2 mt-6 align-center text-center justify-center">
                        <h2 className="text-xl md:text-4xl pricedown mb-4 text-[var(--lgold)] dark:text-[var(--dlgold)]">
                            News and Alerts
                        </h2>
                        <p className="text-sm md:text-xl poppins mb-4 text-[var(--ltext)] dark:text-[var(--dltext)]">
                            Stay Updated with all news of Los Santos!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 sm:p-4 p-3 lg:grid-cols-4 gap-3 rounded-3xl shadow-black/70  dark:shadow-black/10 bg-[var(--bg1)] dark:bg-gray-100 dark:border-gray-400 border-[1px] border-[var(--opac)] shadow-2xl md:gap-4">
                        {articles.map((article) => (
                            <div
                                key={article.id}
                                className="text-[var(--ltext)] dark:text-[var(--dlblue)] hover:text-[var(--lgold)] hover:dark:text-[var(--dltext)] sm:p-4 p-2 hover:dark:bg-white hover:bg-[var(--opac2)] bg-[var(--opac)] dark:bg-gray-100 border-[1px] border-[var(--opac)] dark:border-gray-300 rounded-2xl shadow-black/30 dark:shadow-none overflow-hidden cursor-pointer p-2 md:p-3 transition ease-in-out duration-1500"
                                onClick={() => handleClick(article)}
                            >
                                <img
                                    src={article.image}
                                    alt={article.headline}
                                    className="w-full md:h-52 h-25 md:rounded-md rounded-md shadow-sm object-cover"
                                />
                                <div className="md:p-4 p-0 pt-2">
                                    <h3 className="md:text-lg text-sm poppins font-medium">
                                        {article.headline}
                                    </h3>
                                    <div className="flex mt-2 border-[1px] justify-center text-xs border-[var(--opac)] dark:border-gray-300px-4 py-2 rounded-full items-center">
                                        <div className="flex items-center">
                                            <FaThumbsUp />
                                            <span>{article.likes}</span>
                                        </div>
                                        <div className="border-l h-4 border-gray-400 mx-3"></div>
                                        <div className="flex items-center">
                                            <FaCommentAlt />
                                            <span>
                                                {article.comments.length}
                                            </span>
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
