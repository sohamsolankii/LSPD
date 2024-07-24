import express from 'express'
import {validateAdmin} from './../middleware/validateAdmin.middleware.js'
import {
    updateAnnouncement,
    createAnnouncement,
    fetchAnnouncement,
    deleteAnnouncement,
    fetchSpecificAnnouncement,
} from '../controllers/announcement.controller.js'
import {upload} from '../middleware/multer.middleware.js'

const router = express.Router()

router.route('/').post(upload, createAnnouncement).get(fetchAnnouncement)

router.route('/watch/:announcementID').get(fetchSpecificAnnouncement)

router
    .route('/update-announcement/:announcementID')
    .post(validateAdmin, updateAnnouncement)

router
    .route('/delete-announcement/:announcementID')
    .get(validateAdmin, deleteAnnouncement)

export default router
