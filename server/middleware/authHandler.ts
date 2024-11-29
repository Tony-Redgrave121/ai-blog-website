import ApiError from "../error/ApiError.js";
import tokenService from "../service/tokenService.js";
import {Request, Response, NextFunction} from "express";

export default function authHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) return next(ApiError.unauthorized("Unauthorized"))

        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken) return next(ApiError.unauthorized("Unauthorized"))

        const userDate = tokenService.validateAccessToken(accessToken)
        if (!userDate) return next(ApiError.unauthorized("Unauthorized"))

        // req.user = userDate
        next()
    } catch (e) {
        return next(ApiError.unauthorized("Unauthorized"))
    }
}