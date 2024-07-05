import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from './../utils/ApiResponse.js'
import Tip from '../models/tip.schema.js'

// * Create a new Tip
export const addTip = AsyncHandler(async (req, res) => {
    const userID = req?.user.id
    const tips = req.body.tip

    const newTip = new Tip({
        userID,
        tips,
    })

    await newTip.save()

    console.log(newTip)

    res.status(200).json(new ApiResponse(200, newTip, 'New Tip Created'))
})

// * Fetch Tips
export const fetchTip = AsyncHandler(async (req, res) => {
    const comments = await Tip.find().populate('userID')

    res.status(200).json(
        new ApiResponse(200, comments, 'Comments fetched successfully'),
    )
})
