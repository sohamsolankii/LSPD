import express from 'express'
import {authValidator} from '../middleware/auth.middleware.js'
import {validateAdmin} from './../middleware/validateAdmin.middleware.js'
import {
    addCrime,
    fetchMostWantedList,
    fetchSpecificWantedUser,
} from '../controllers/crime.controller.js'

const router = express.Router()

router.route('/add-crime/:userID').post(validateAdmin, addCrime)

router.route('/wanted-list-user/:userID').get(fetchSpecificWantedUser)

router.route('/wanted-list').get(fetchMostWantedList)

export default router
