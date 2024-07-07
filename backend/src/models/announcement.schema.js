import mongoose from 'mongoose'
const Schema = mongoose.Schema

const announcementSchema = new Schema({
    image: {
        type: String,
        required: [true, 'Image is Required'],
    },
    title: {
        type: String,
        required: [true, 'Title is Required'],
    },
    description: {
        type: String,
        required: [true, 'Description is Required'],
    },
})

const Announcement = mongoose.model('Announcement', announcementSchema)

export default Announcement
