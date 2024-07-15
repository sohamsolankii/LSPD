import bcrypt from 'bcryptjs'
import User from '../models/user.schema.js'
import {AsyncHandler} from '../utils/AsyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from './../utils/ApiResponse.js'
import {setToken} from './../utils/setReqToken.js'

// * Sign Up
export const signUp = AsyncHandler(async (req, res) => {
    const {name, email, password} = req?.body
    const validEmail = await User.findOne({email: email})

    // ! Check if email is available
    if (validEmail) throw new ApiError(409, 'Email already in use')

    const newUser = new User({
        name,
        email,
        password,
    })
    await newUser.save()

    const accessToken = setToken(req, newUser)

    res.cookie('userCookie', accessToken, {
        httpOnly: true,
    })
        .status(201)
        .json(
            new ApiResponse(
                201,
                {newUser, accessToken},
                'User logged in successfully',
            ),
        )
})

// * Log in
export const logIn = AsyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email: email})

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new ApiError(401, 'Invalid Details')
    }

    const accessToken = setToken(req, user)

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

