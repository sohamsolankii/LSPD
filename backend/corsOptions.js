var whitelist = [
    'https://lspd-sohams-projects-4d3c8039.vercel.app',
    'http://localhost:5173',
]

export const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    methods: '*', // Correct spelling
    allowedHeaders: '*', // 'headers' key should be 'allowedHeaders'
}
