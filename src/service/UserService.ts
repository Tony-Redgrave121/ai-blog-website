import $api from '../http'
import {AxiosResponse} from 'axios'
import IUser from "../utils/types/IUser"

export default class UserService {
    static fetchUserInfo(user_name: string): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>(`/user/${user_name}/info`)
    }
}