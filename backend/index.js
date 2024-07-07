// Routes
import authRoutes from './src/routes/auth.route.js'
import commentRoutes from './src/routes/comment.route.js'
import tipRoutes from './src/routes/tip.route.js'
import crimeRoutes from './src/routes/crime.route.js'
import announcementRoutes from './src/routes/announcement.route.js'
import reportCrimeRoutes from './src/routes/reportCrime.route.js'

import {appConfig, app} from './config.js'

// * Config of App
appConfig()

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/comment', commentRoutes)
app.use('/api/v1/tip', tipRoutes)
app.use('/api/v1/crime', crimeRoutes)
app.use('/api/v1/announcement', announcementRoutes)
app.use('/api/v1/reportCrime', reportCrimeRoutes)
