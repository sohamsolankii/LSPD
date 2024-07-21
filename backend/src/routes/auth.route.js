import express from 'express'
import {signUp, logIn, logOut, adminLogin, adminLogout} from '../controllers/auth.controller.js'
import {authValidator} from '../middleware/auth.middleware.js'
import { validateAdmin } from '../middleware/validateAdmin.middleware.js'


const router = express.Router()

// * Sign Up
router.route('/signup').post(signUp)

// * Log In
router.route('/login').post(logIn)

// * Log out
router.get("/logout", authValidator, logOut)

// * amdin logIn
router.route('/admin-login').post(adminLogin)

// * admin logout
router.route('/admin-logout').get(validateAdmin, adminLogout)

// * final check of user that by jwt token
router.get('/me', authValidator, (req, res) => {
    res.json({user: req.user})
})


export default router
