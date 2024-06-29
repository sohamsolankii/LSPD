import mongoose from "mongoose"
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phone: {
			type: Number,
			required: true,
			min: [10, 'Must be at least 10, got {value}'],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: 5,
		},   
	},
{
	timestamps: true,
})

// exporting model so that we can perfoem CRUD operations on it
const User = mongoose.model('User', userSchema);
// User -> user thai jase  but refernce mate sme name aapvu

export default User;