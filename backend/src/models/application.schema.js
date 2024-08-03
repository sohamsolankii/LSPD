import mongoose from 'mongoose'
const Schema = mongoose.Schema

const applicationSchema = new Schema(
    {
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        whyHireYou: {
            type: String,
            required: true,
        },
        pastExperience: {
            type: String,
            required: true,
        },
        education: {
            type: String,
            required: true,
        },
        additionalInfo: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
)

const Application = mongoose.model('Application', applicationSchema)

export default Application
