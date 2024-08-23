const whitelist = [
    'https://lspd-sohams-projects-4d3c8039.vercel.app',
    'https://lspd-git-main-sohams-projects-4d3c8039.vercel.app',
    'http://localhost:5173',
]

export const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true) // Allow the request
        } else {
            callback(new Error('Not allowed by CORS')) // Reject the request
        }
    },
    credentials: true, // Allow cookies/auth to be passed
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Specify allowed headers
}
