import express from 'express'
import {signUp, logIn, logOut} from '../controllers/auth.controller.js'
import {authValidator} from '../middleware/auth.middleware.js'


const router = express.Router()

// * Sign Up
router.route('/signup').post(signUp)

// * Log In
router.route('/login').post(logIn)

// * Log out
router
	.get("/logout", authValidator, logOut)

export default router
