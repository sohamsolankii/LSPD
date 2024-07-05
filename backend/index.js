import express from 'express'
import connectDB from './src/db/connectDB.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'

// Routes
import authRoutes from './src/routes/auth.route.js'
import commentRoutes from './src/routes/comment.route.js'
import tipRoutes from './src/routes/tip.route.js'
import crimeRoutes from './src/routes/crime.route.js'

// Middleware setup
dotenv.config({path: 'backend/.env'})

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

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/comment', commentRoutes)
app.use('/api/v1/tip', tipRoutes)
app.use('/api/v1/crime', crimeRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`Port is running on ${PORT}`)
})
