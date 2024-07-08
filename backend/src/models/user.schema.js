import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
        crimes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Crime',
            },
        ],
        jobs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Job',
            },
        ],
    },
    {
        timestamps: true,
    },
)

// exporting model so that we can perfoem CRUD operations on it
const User = mongoose.model('User', userSchema)
// User -> user thai jase  but refernce mate sme name aapvu

export default User
// Use a fucking English
