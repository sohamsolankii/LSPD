import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.schema.js'
import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from './../utils/ApiResponse.js'
const saltRounds = 10

// * Sign Up
export const signUp = AsyncHandler(async (req, res) => {
    const {name, email, password} = req?.body
    const validEmail = await User.findOne({email: email})
    if (validEmail) throw new ApiError(409, 'Email already in use')

    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    })
    await newUser.save()
    const accessToken = jwt.sign(
        {
            user: {
                name: newUser.name,
                email: newUser.email,
                id: newUser.id,
            },
        },
        process.env.ACCESS_TOKEN,
        // {expiresIn: process.env.EXPIRE_IN},
    )

    req.user = {
        name: newUser.name,
        email: newUser.email,
        id: newUser.id,
    }

    res.cookie('userCookie', accessToken, {
        httpOnly: true,
    })

    res.status(201).json(
        new ApiResponse(201, newUser, 'User logged in successfully'),
    )
})

// * Log in
export const logIn = AsyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email: email})

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new ApiError(401, 'Invalid Details')
    }

    const accessToken = jwt.sign(
        {
            user: {
                name: user.name,
                email: user.email,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN,
        // {expiresIn: process.env.EXPIRE_IN},
    )

    req.user = {
        name: user.name,
        email: user.email,
        id: user.id,
    }

    const hundredYearsInMilliseconds = 100 * 365.25 * 24 * 60 * 60 * 1000

    res.cookie('userCookie', accessToken, {
        httpOnly: true,
        maxAge: hundredYearsInMilliseconds,
    })
        .status(200)
        .json({user, accessToken})
})

// * LogOut
export const logOut = AsyncHandler(async (req, res) => {
    res.clearCookie('userCookie').send('Cookie deleted')
})

// * Fetch User profile
// export const getUserInfo = asyncHandler(async (req, res) => {
//     const user = req?.user
//     if (!user) {
//         return res.status(404).json({message: 'User not found in request'})
//     }
//     const isMerchant = await Merchant.findOne({merchant: user.id})
//     if (!isMerchant) {
//         console.log('User is not merchant')
//     }
//     const findUser = await User.findById(user.id)
//     const order = await Order.find({userId: user.id}).populate('productId')
//     const address = await Address.find({userId: user.id})
//     if (!findUser) {
//         return res.status(404).json({message: 'User not found'})
//     }
//     res.status(200).json({
//         user: findUser,
//         merchant: isMerchant,
//         order: order,
//         address: address,
//     })
// })

// ! Update Profile
// export const updateUser = asyncHandler(async (req, res) => {
//     const user = req.user
//     const email = req.body.email
//     const password = req.body.password
//     const updateUser = await User.findByIdAndUpdate(
//         {_id: user.id},
//         {password: password, email: email},
//         {new: true},
//     )
//     if (!updateUser) {
//         return res.status(404).json({message: 'User not found'})
//     }

//     res.status(200).json({
//         message: 'User updated successfully',
//         user: updateUser,
//     })
// })

// // * Fetch a logged in user data
// export const currentUser = asyncHandler(async (req, res) => {
//     const user = req?.user
//     if (!user) {
//         return res.status(404).json('User not logged in')
//     }
//     res.status(200).json(user)
// })
