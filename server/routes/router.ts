import {
    ACTIVATION_PAGE,
    DELETE_ACCOUNT_ROUTE,
    LOGIN_ROUTE,
    LOGOUT_ROUTE,
    REFRESH_ROUTE,
    REGISTRATION_ROUTE,
} from "../utils/const"
import express from "express"
import UserController from "../controller/userController"
const router = express.Router()

router.post(REGISTRATION_ROUTE, UserController.registration)
router.post(LOGIN_ROUTE, UserController.login)
router.post(LOGOUT_ROUTE, UserController.logout)
router.get(REFRESH_ROUTE, UserController.refresh)
router.get(ACTIVATION_PAGE, UserController.activate)
router.post(DELETE_ACCOUNT_ROUTE, UserController.deleteAccount)

export default router