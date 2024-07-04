import {AsyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from './../utils/ApiResponse.js'
import Comment from '../models/comment.schema.js'
import {checkParams} from '../validators/checkParams.js'

// * Create a new comment
export const addComment = AsyncHandler(async (req, res) => {
    const userID = req?.user.id
    const comment = req.body.comment
    const news = req.params.news

    const newComment = new Comment({
        userID,
        comment,
        news,
    })

    await newComment.save()

    console.log(newComment)

    res.status(200).json(new ApiResponse(200, comment, 'New Comment Created'))
})

// * Fetch Comments for a specific news
export const fetchComment = AsyncHandler(async (req, res) => {
    const news = req.params.news

    checkParams(req, 'news')

    const comments = await Comment.find({news}).populate('userID')

    res.status(200).json(
        new ApiResponse(200, comments, 'Comments fetched successfully'),
    )
})
