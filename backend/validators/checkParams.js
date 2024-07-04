import {ApiError} from '../utils/ApiError.js'

export const checkParams = (req, paramName) => {
    const param = req.params[paramName]

    if (!param) {
        throw new ApiError(404, `Missing param: ${paramName}`)
    }
}
