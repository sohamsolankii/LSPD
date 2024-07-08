import express from 'express'
import {validateAdmin} from './../middleware/validateAdmin.middleware.js'
import {
    updateAnnouncement,
    createAnnouncement,
    fetchAnnouncement,
    deleteAnnouncement,
} from '../controllers/announcement.controller.js'

const router = express.Router()

router.route('/').post(validateAdmin, createAnnouncement).get(fetchAnnouncement)

router
    .route('/updateAnnouncement/:announcementID')
    .post(validateAdmin, updateAnnouncement)

router
    .route('/deleteAnnouncement/:announcementID')
    .get(validateAdmin, deleteAnnouncement)

export default router
