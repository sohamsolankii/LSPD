import express from 'express'
import {addTip, fetchTip} from '../controllers/tip.controller.js'
import {authValidator} from '../middleware/auth.middleware.js'
import {validateAdmin} from './../middleware/validateAdmin.middleware.js'

const router = express.Router()

// * Create a new Tip
// * Fetch Tips
router.route('/').post(authValidator, addTip).get(validateAdmin, fetchTip)

export default router
