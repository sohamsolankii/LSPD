import jwt from 'jsonwebtoken'

export const setToken = (req, newUser) => {
    const accessToken = jwt.sign(
        {
            user: {
                name: newUser.name,
                email: newUser.email,
                id: newUser.id,
            },
        },
        process.env.ACCESS_TOKEN,
        // {expiresIn: process.env.EXPIRE_IN},
    )

    req.user = {
        name: newUser.name,
        email: newUser.email,
        id: newUser.id,
    }

    return accessToken
}
