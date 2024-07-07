export const corsOptions = {
    origin: function (origin, callback) {
        callback(
            null,
            (origin && origin.startsWith(process.env.CORS_ORIGIN)) || '*',
        )
    },
    credentials: true,
}
