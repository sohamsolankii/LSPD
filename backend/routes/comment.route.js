import express from 'express'
import {addComment, fetchComment} from '../controllers/comment.controller.js'
import {authValidator} from '../middleware/auth.middleware.js'

const router = express.Router()

// * Create a new comment
router.route('/addComment/:news').post(authValidator, addComment)

// * Fetch Comments for a specific news
router.route('/fetchComment/:news').get(fetchComment)

export default router
