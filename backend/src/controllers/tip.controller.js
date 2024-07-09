import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from './../utils/ApiResponse.js'
import Tip from '../models/tip.schema.js'

// * Create a new Tip
export const addTip = AsyncHandler(async (req, res) => {
    const user = req?.user.id
    const tips = req.body.tip

    const newTip = new Tip({
        user,
        tips,
    })

    await newTip.save()

    res.status(200).json(new ApiResponse(200, newTip, 'New Tip Created'))
})

// * Fetch Tips
export const fetchTip = AsyncHandler(async (req, res) => {
    // const comments = await Tip.find().populate('userID')

    const comments = await Tip.aggregate([
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
