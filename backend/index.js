import express from 'express'
import connectDB from './db/connectDB.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'

// Routes
import authRoutes from './routes/auth.route.js'
import commentRoutes from './routes/comment.route.js'

// Middleware setup
dotenv.config({path: '.env'})

const app = express()
const PORT = process.env.PORT || 3000

// CORS setup
app.use(
    cors({
        credentials: true,
        origin: process.env.CORS_ORIGIN,
    }),
)

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())

app.use('/', authRoutes)
app.use('/comment', commentRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`Port is running on ${PORT}`)
})
