import jwt from 'jsonwebtoken'

export const validateAdmin = async (req, res, next) => {
    const cookie = req.cookies?.userCookie
    console.log(req.user)
    if (cookie) {
        jwt.verify(cookie, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.user = decoded.user
            if (req.user.name === 'admin' || req.user.email === 'admin@gmail.com'){
                next()
            } else {
                res.status(403).json(
                    'You are not authorized to access this page',
                )
            }
        })
    } else {
        res.status(401).json('You are not authenticated')
    }
}
