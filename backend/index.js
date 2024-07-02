import express from 'express'
import connectDB from './db/connectDB.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// Routes
import auth from './routes/auth.route.js'

// Middleware setup
dotenv.config({
    path: './.env',
})

const app = express()
const PORT = process.env.PORT || 3000

// CORS setup
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    }),
)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())

connectDB()

app.use('/', auth)

app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})
