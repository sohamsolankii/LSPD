import {AsyncHandler} from '../utils/AsyncHandler.js'
import Announcement from './../models/announcement.schema.js'
import {ApiResponse} from './../utils/ApiResponse.js'

// * Create announcement
export const createAnnouncement = AsyncHandler(async (req, res) => {
    const {title, description} = req.body
    console.log(title, description)

    const newAnnouncement = await Announcement.create({
        image: '1',
        title,
        description,
    })

    console.log(newAnnouncement)

    res.status(200).json(
        new ApiResponse(
            200,
            newAnnouncement,
            'New Announcement created successfully',
        ),
    )
})

// * Fetch announcement
export const fetchAnnouncement = AsyncHandler(async (req, res) => {
    // const announcements = await Announcement.aggregate([{$match: '_id'}])

    const announcements = await Announcement.find()

    console.log(announcements)

    res.status(202).json(
        new ApiResponse(
            202,
            announcements,
            'Announcements fetched successfully',
        ),
    )
})

// * Update announcement
export const updateAnnouncement = AsyncHandler(async (req, res) => {
    const id = req.params?.announcementID
    const {description, title} = req.body

    const update = await Announcement.findByIdAndUpdate(id, {
        description,
        title,
    })

    console.log(update)

    res.status(200).json(
        new ApiResponse(200, update, 'Announcement updated successfully'),
    )
})

// * Delete announcement
export const deleteAnnouncement = AsyncHandler(async (req, res) => {
    const id = req.params?.announcementID

    const findAnnouncement = await Announcement.findById(id)

    console.log(findAnnouncement)

    const delAnnouncement = await Announcement.findByIdAndDelete(id)
    console.log(delAnnouncement)

    res.status(200).json(
        new ApiResponse(200, delAnnouncement, 'Announcement deleted'),
    )
})
