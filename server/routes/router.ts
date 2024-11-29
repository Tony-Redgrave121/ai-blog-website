import {
    ACTIVATION_PAGE,
    LOGIN_ROUTE, LOGOUT_ROUTE,
    REFRESH_ROUTE,
    REGISTRATION_ROUTE,
    USER_ROUTE
} from "../utils/const"
import express from "express"
import UserController from "../controller/userController"
import authHandler from "../middleware/authHandler";
const router = express.Router()

router.post(REGISTRATION_ROUTE, UserController.registration)
router.post(LOGIN_ROUTE, UserController.login)
router.post(LOGOUT_ROUTE, UserController.logout)
router.get(REFRESH_ROUTE, UserController.refresh)
router.get(USER_ROUTE, UserController.getUser)
router.get(ACTIVATION_PAGE, UserController.activate)

export default router