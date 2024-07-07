import express from 'express'
import {
    updateAnnouncement,
    createAnnouncement,
    fetchAnnouncement,
    deleteAnnouncement,
} from '../controllers/announcement.controller.js'

const router = express.Router()

router
    .route('/createAnnouncement')
    .post(createAnnouncement)
    .get(fetchAnnouncement)

router.route('/updateAnnouncement/:announcementID').post(updateAnnouncement)

router.route('/deleteAnnouncement/:announcementID').get(deleteAnnouncement)

export default router
