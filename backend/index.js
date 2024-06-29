import express from 'express'
import connectDB from './db/connectDB.js' //Database connection
import dotenv from 'dotenv'


dotenv.config({
    path: './.env',
})


const app = express()
const PORT = process.env.PORT || 3000

connectDB();




app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})
