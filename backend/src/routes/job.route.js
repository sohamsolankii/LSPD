import express from 'express'
import {
    createJob,
    showLatestJobs,
    applyJob,
} from './../controllers/job.controller.js'
import {authValidator} from '../middleware/auth.middleware.js'


const router = express.Router()

router.route('/').post(createJob).get(showLatestJobs)

router.post('/:id', authValidator, applyJob)

export default router
