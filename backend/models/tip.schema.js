import mongoose from 'mongoose'
const Schema = mongoose.Schema

const tipSchema = new Schema(
    {
        userID: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        tips: {
            type: String,
            require: [true, 'Comment is required'],
        },
    },
    {
        timestamps: true,
    },
)

const Tip = mongoose.model('Tip', tipSchema)

export default Tip
