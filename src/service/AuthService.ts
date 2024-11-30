import {
    LOGIN_ROUTE,
    LOGOUT_ROUTE,
    REGISTRATION_ROUTE,
} from "../utils/const/const"
import $api from '../http'
import {AxiosResponse} from 'axios'
import IAuthResponse from "../utils/types/IAuthResponse"

export default class AuthService {
    static async login(formData: FormData): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>(LOGIN_ROUTE, formData)
    }

    static async registration(formData: FormData): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>(REGISTRATION_ROUTE, formData)
    }

    static async logout(): Promise<void> {
        return $api.post(LOGOUT_ROUTE)
    }
}