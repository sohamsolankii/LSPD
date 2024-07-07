import express from 'express'
import {authValidator} from '../middleware/auth.middleware.js'
import {validateAdmin} from './../middleware/validateAdmin.middleware.js'
import {
    addCrime,
    fetchMostWantedList,
    fetchSpecificWantedUser,
} from '../controllers/crime.controller.js'

const router = express.Router()

router.route('/addCrime/:userID').post(validateAdmin, addCrime)

router.route('/wantedListUser/:userID').get(fetchSpecificWantedUser)

router.route('/wantedList').get(fetchMostWantedList)

export default router
