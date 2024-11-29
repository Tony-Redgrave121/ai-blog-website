import tokenService from "./tokenService"
import ApiError from "../error/ApiError"
import models from "../model/models"
import {Sequelize} from "sequelize"
import * as uuid from "uuid"
import IUser from "../types/IUser"
import bcrypt from "bcrypt"
import getUserImgService from "./getUserImgService"
import mailService from "./mailService"
import { UploadedFile } from 'express-fileupload'
import IRegistrationResponse from "../types/IRegistrationResponse";

interface IUserFiles {
    user_img?: UploadedFile
}

class UserService {
    async registration(user_body: IUser, user_files?: IUserFiles | null): Promise<IRegistrationResponse | ApiError> {
        const {user_name, user_email, user_password} = user_body
        const userCheck = await models.users.findOne({where: Sequelize.or({user_email: user_email}, {user_name: user_name})})
        if(userCheck) return ApiError.badRequest(`User with email or name already exists`)

        let userImg = null

        if (user_files) {
            if (user_files.user_img) userImg = getUserImgService(user_name + '/user_img', user_files.user_img, user_files.user_img.name)
        }

        const hash_user_password = await bcrypt.hash(user_password, 5)
        const user_id = uuid.v4(), user_activation_link = uuid.v4()

        await models.users.create({user_id: user_id, user_name, user_email, user_password: hash_user_password, user_img: userImg, user_activation_link: user_activation_link})

        const tokens = tokenService.generateToken({user_id, user_email, user_name})
        await tokenService.saveToken(user_id, tokens!.refreshToken)
        await mailService.sendMail(user_email, `${process.env.API_URL}/activate/${user_activation_link}`)

        if (userImg instanceof ApiError) return ApiError.badRequest(`Error with user image creation`)

        return {
            ...tokens,
            user_name: user_name,
            user_img: userImg,
        }
    }

    async login(user_body: { user_email: string, user_password: string }) {
        const {user_email, user_password} = user_body
        const user: IUser | null = await models.users.findOne({where: {user_email: user_email}}) as IUser | null
        if (!user) return ApiError.notFound("UserPage not found")

        if (!user) return ApiError.unauthorized("Unauthorized")

        let comparePassword = bcrypt.compareSync(user_password, user.user_password)
        if(!comparePassword) return ApiError.forbidden('Password is incorrect')

        const tokens = tokenService.generateToken({user_id: user.user_id, user_email})

        await tokenService.saveToken(user.user_id, tokens!.refreshToken)

        return {
            ...tokens,
            user_id: user.user_id,
            user_name: user.user_name,
            user_img: user.user_img,
        }
    }

    async logout(refreshToken: string) {
        return await tokenService.deleteToken(refreshToken)
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) return ApiError.unauthorized("Unauthorized")
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenDB = tokenService.findToken(refreshToken)
        if (!userData || !tokenDB || typeof userData === "string") return ApiError.unauthorized("Unauthorized")

        const user: IUser | null= await models.users.findOne({where: {user_id: userData.user_id}}) as IUser | null

        if (!user) return ApiError.unauthorized("Unauthorized")

        const tokens = tokenService.generateToken({user_id: user.user_id, user_email: user.user_email} )

        await tokenService.saveToken(user.user_id, tokens!.refreshToken)
        await tokenService.deleteToken(refreshToken)

        return {
            ...tokens,
            user_id: user.user_id,
            user_name: user.user_name,
            user_img: user.user_img,
        }
    }
}

export default new UserService()