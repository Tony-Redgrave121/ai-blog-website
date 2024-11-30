import ApiError from "../error/ApiError"
import models from "../model/models"
import {Request, Response, NextFunction} from "express"
import userService from "../service/userService"
import IUser from "../types/IUser"

class UserController {
    constructor() {
        this.getUser = this.getUser.bind(this)
    }

    userResponse = (user_email: string) => {
        return {
            attributes: ['user_id', 'user_name', 'user_img'],
            where: {user_email: user_email}
        }
    }

    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user_email = req.params.email
            if (!user_email) return next(ApiError.badRequest('Missing required fields'))

            const userResponse = this.userResponse(user_email)

            const user = await models.users.findOne({
                attributes: [...userResponse.attributes],
                where: {...userResponse.where}
            })

            return next(res.json(user));
        } catch (e) {
            return next(ApiError.internalServerError('An error occurred while getting user'))
        }
    }

    async registration(req: Request, res: Response): Promise<any> {
        try {
            const userData = await userService.registration(req.body, req.files)
            if (userData instanceof ApiError) return res.json(ApiError.internalServerError(userData.message))

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData)
        } catch (e) {
            return res.json(ApiError.internalServerError('An error occurred while registration'))
        }
    }

    async login(req: Request, res: Response): Promise<any> {
        try {
            const userData = await userService.login(req.body)

            if (userData instanceof ApiError) return res.json(ApiError.internalServerError('An error occurred while login'))

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData)
        } catch (e) {
            return res.json(ApiError.internalServerError('An error occurred while login'))
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')

            return next(res.json(token))
        } catch (e) {
            return next(ApiError.internalServerError("An error occurred while logging out"))
        }
    }

    async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const link = req.params.link
            const user: IUser | null = await models.users.findOne({where: {user_activation_link: link}}) as IUser | null
            if (!user) return next(ApiError.notFound("User not found"))

            user.user_state = true
            await user.save()

            return res.redirect(process.env.CLIENT_URL!)
        } catch (e) {
            return next(ApiError.internalServerError('An error occurred while activating account'))
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)

            if (userData instanceof ApiError) return next(ApiError.internalServerError('An error occurred while refreshing'))

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true})
            return next(res.json(userData))
        } catch (e) {
            return next(ApiError.internalServerError("An error occurred while refreshing"))
        }
    }
}

export default new UserController()