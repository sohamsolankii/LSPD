import express from 'express'
import {authValidator} from '../middleware/auth.middleware.js'
import {
    addCrime,
    fetchCrime,
    fetchMostWantedList,
} from '../controllers/crime.controller.js'

const router = express.Router()

router.route('/addCrime/:userID').post(authValidator, addCrime)

router.route('/fetchCrime/:userID').get(authValidator, fetchCrime)

router.route('/wantedList').get(fetchMostWantedList)

router.route('/wantedListUser/:userID').get(fetchMostWantedList)

export default router
