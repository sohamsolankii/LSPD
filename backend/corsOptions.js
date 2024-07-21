export const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigin = process.env.CORS_ORIGIN
        if (origin && origin.startsWith(allowedOrigin)) {
            callback(null, true)
        } else {
            callback(null, '*')
        }
    },
    credentials: true,
}
