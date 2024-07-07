import Crime from '../models/crime.schema.js'
import User from '../models/user.schema.js'
import {AsyncHandler} from './../utils/AsyncHandler.js'
import {ApiError} from './../utils/ApiError.js'
import {ApiResponse} from './../utils/ApiResponse.js'
import mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId

// * Add Crime for Specific User
export const addCrime = AsyncHandler(async (req, res) => {
    const {crime, rating} = req?.body
    const userID = req.params.userID

    const user = await User.findById(userID)
    if (!user) {
        throw new ApiError(404, 'User not found')
    }

    const newCrime = new Crime({
        user: userID,
        crime,
        rating,
    })

    user.crimes.push(newCrime)

    await newCrime.save()
    await user.save()
    res.status(201).json(new ApiResponse(201, user, 'Crime has been added'))
})

// ! Get All Crimes for Specific User
export const fetchMostWantedList = AsyncHandler(async (req, res) => {
    const crimes = await Crime.aggregate([
        {
            $match: {
                rating: {
                    $gt: 3,
                },
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
                            name: 1,
                            email: 1,
                            createdAt: 1,
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
    res.status(200).json(new ApiResponse(200, crimes, 'Fetch successfully'))
})

export const fetchSpecificWantedUser = AsyncHandler(async (req, res) => {
    const userID = req.params.userID
    const userObjectID = new ObjectId(userID)

    // const user = await Crime.aggregate([
    //     {
    //         $match: {
    //             user: userID,
    //         },
    //     },
    //     {
    //         $lookup: {
    //             from: 'users',
    //             localField: 'user',
    //             foreignField: '_id',
    //             as: 'user',
    //             pipeline: [
    //                 {
    //                     $project: {
    //                         name: 1,
    //                         email: 1,
    //                         createdAt: 1,
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    //     {
    //         $unwind: {
    //             path: '$user',
    //         },
    //     },
    // ])

    const user = await User.aggregate([
        {
            $match: {
                _id: userObjectID,
            },
        },
        {
            $lookup: {
                from: 'crimes',
                localField: 'crimes',
                foreignField: '_id',
                as: 'crimes',
            },
        },
        {
            $project: {
                password: 0,
            },
        },
    ])

    res.status(200).json(
        new ApiResponse(200, user, 'User fetched successfully'),
    )
})
