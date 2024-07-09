import express from 'express'
import {signUp, logIn} from '../controllers/auth.controller.js'

const router = express.Router()

// * Sign Up
router.route('/signup').post(signUp)

// * Log In
router.route('/login').post(logIn)

export default router
