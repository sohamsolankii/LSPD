import {AsyncHandler} from '../utils/AsyncHandler.js'
import Announcement from './../models/announcement.schema.js'
import {ApiResponse} from './../utils/ApiResponse.js'
import {checkParams} from './../validators/checkParams.js'
import {intoObjectId} from './../utils/ObjectId.js'

// * Create announcement
export const createAnnouncement = AsyncHandler(async (req, res) => {
    const {title, description} = req.body
	const imageFile = req.file?.path

	console.log(req.body, req.file)

	let image

	if (imageFile) {
		const uploadResult = await uploadOnCloudinary(imageFile)
		if (uploadResult) {
			const image = uploadResult.secure_url
		}
	}
	console.log(image)

    const newAnnouncement = await Announcement.create({
        image,
        title,
        description,
    })

    res.status(200).json(
        new ApiResponse(
            200,
            newAnnouncement,
            'New Announcement created successfully',
        ),
    )
})

export const fetchSpecificAnnouncement = AsyncHandler(async (req, res) => {
    await checkParams(req, 'announcementID', Announcement)
    const announcementID = req.params.announcementID

    const announcementObjID = intoObjectId(announcementID)

    const announcement = await Announcement.aggregate([
        {
            $match: {
                _id: announcementObjID,
            },
        },
        {
            $lookup: {
                from: 'comments',
                localField: 'comments',
                foreignField: '_id',
                as: 'comments',
                pipeline: [
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'user',
                            foreignField: '_id',
                            as: 'user',
                        },
                    },
                    {
                        $unwind: '$user',
                    },
                ],
            },
        },
    ])

    if (!announcement[0]) throw new ApiError(404, `Announcement not found`)

    res.status(200).json(
        new ApiResponse(200, announcement[0], 'fetched successfully'),
    )
})

// * Fetch announcement
export const fetchAnnouncement = AsyncHandler(async (req, res) => {
    // const announcements = await Announcement.aggregate([{$match: '_id'}])

    const announcements = await Announcement.find()

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
