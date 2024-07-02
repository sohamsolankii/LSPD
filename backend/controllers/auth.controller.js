import User from '../models/user.schema.js'
import {hassPassword, comparePassword} from '../validators/auth.js'
import jwt from 'jsonwebtoken'

export const test = (req, res) => {
    res.json('test is working')
}

// register user
export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        // like if name was entered
        if (!name) {
            return res.json({
                error: 'name is required',
            })
        }
        // check is password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'password is required and should be atleast 6 characters long',
            })
        }
        // check email
        const exist = await User.findOne({email})
        if (exist) {
            return res.json({
                error: 'email already exists',
            })
        }

        // hash password
        const hashedPassword = await hassPassword(password)

        // create user into database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        return res.json({user})
    } catch (err) {
        console.log(err)
    }
}

// login user
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body

        // Check if user exists
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({
                error: 'No user found!',
            })
        }

        // Check if the password matches
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(400).json({
                error: 'Password not matched!',
            })
        }

        // If password matches, proceed
        // res.json({
        //     message: 'Login successful',
        //     user: {name: user.name, email: user.email}, // Do not send password
        // })
        jwt.sign(
            {email: user.email, id: user._id, name: user.name},
            process.env.JWT_SECRET,
            {},
            (err, token) => {
                if (err) throw err
                res.cookie('token', token).json(user)
            },
        )
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Server error. Please try again later.',
        })
    }
}

export const getProfile = async (req, res) => {
	const {token} = req.cookies
	if(token){
		jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
			if(err) throw err
			res.json(user)
		})
	}
	else{
		res.json(null)
	}
}