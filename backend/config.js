import express from 'express'
import connectDB from './src/db/connectDB.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import {corsOptions} from './corsOptions.js'

const app = express()
const PORT = process.env.PORT || 3000

export const appConfig = () => {
    dotenv.config({path: './backend/.env'}) // !when runnig both server concurrently
    // dotenv.config({path: '.env'}) // !when runnig only the backend server


    app.use(cors(corsOptions))
    	.use(express.json())
        .use(morgan('dev'))
        .use(express.urlencoded({extended: true}))
        .use(express.static('public'))
        .use(cookieParser())
        .listen(PORT, () => {
            console.log(`Port is running on ${PORT}`)
            connectDB()
        })
}

export {app}
