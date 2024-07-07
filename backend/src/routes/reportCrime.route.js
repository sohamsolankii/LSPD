import express from 'express'
import {
    createCrimeDetails,
    fetchCrimeDetails,
} from '../controllers/reportCrime.controller.js'
import {authValidator} from '../middleware/auth.middleware.js'

const router = express.Router()

router
    .route('/reportCrime')
    .post(authValidator, createCrimeDetails)
    .get(authValidator, fetchCrimeDetails)

export default router
