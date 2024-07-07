import {AsyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from './../utils/ApiResponse.js'
import Comment from '../models/comment.schema.js'
import {checkParams} from '../validators/checkParams.js'
import {mongoose} from 'mongoose'

// * Create a new comment
export const addComment = AsyncHandler(async (req, res) => {
    const user = req?.user.id
    const comment = req.body.comment
    const news = req.params.news

    const newComment = new Comment({
        user,
        comment,
        news,
    })

    await newComment.save()

    console.log(newComment)

    res.status(200).json(new ApiResponse(200, comment, 'New Comment Created'))
})

const {ObjectId} = mongoose.Types

// * Fetch Comments for a specific news
export const fetchComment = AsyncHandler(async (req, res) => {
    const news = req.params.news

    checkParams(req, 'news')

    // const comments = await Comment.find({news}).populate('userID')

    const comments = await Comment.aggregate([
        {
            $match: {
                news: news,
            },
        },
        {
            $lookup: {
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'user',
                pipeline: [
                    {
                        $project: {
                            password: 0,
                            crimes: 0,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: '$user',
            },
        },
    ])

    res.status(200).json(
        new ApiResponse(200, comments, 'Comments fetched successfully'),
    )
})
