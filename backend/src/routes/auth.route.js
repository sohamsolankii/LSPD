import express from 'express'
import {
    // test,
    signUp,
    logIn,
    // getProfile,
} from '../controllers/auth.controller.js'

const router = express.Router()

// router.get('/', test)
router.post('/signUp', signUp)
router.post('/login', logIn)

// router.get('/profile', getProfile);

export default router
