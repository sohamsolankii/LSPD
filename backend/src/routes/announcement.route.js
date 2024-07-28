import express from 'express'
import {validateAdmin} from './../middleware/validateAdmin.middleware.js'
import {
    updateAnnouncement,
    createAnnouncement,
    fetchAnnouncement,
    deleteAnnouncement,
    fetchSpecificAnnouncement,
    addLikes,
    addDislikes,
} from '../controllers/announcement.controller.js'
import {upload} from '../middleware/multer.middleware.js'

const router = express.Router()

router
    .route('/')
    .post(upload.single('image'), createAnnouncement)
    .get(fetchAnnouncement)

router.route('/watch/:announcementID').get(fetchSpecificAnnouncement)

router.route('/update-announcement/:announcementID').put(updateAnnouncement)
router.route('/delete-announcement/:announcementID').delete(deleteAnnouncement)

router.route('/add-like/:announcementID').get(addLikes)
router.route('/add-dislike/:announcementID').get(addDislikes)

export default router
