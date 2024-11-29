"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("../error/ApiError"));
const models_1 = __importDefault(require("../model/models"));
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.userResponse = (user_name) => {
            return {
                attributes: ['user_id', 'user_name', 'user_img'],
                where: { user_name: user_name }
            };
        };
        this.getUser = this.getUser.bind(this);
    }
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user_name = req.params.name;
                if (!user_name)
                    return next(ApiError_1.default.badRequest('Missing required fields'));
                const userResponse = this.userResponse(user_name);
                const user = yield models_1.default.users.findOne({
                    attributes: [...userResponse.attributes],
                    where: Object.assign({}, userResponse.where)
                });
                return next(res.json(user));
            }
            catch (e) {
                return next(ApiError_1.default.internalServerError('An error occurred while getting user'));
            }
        });
    }
    registration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = yield userService_1.default.registration(req.body, req.files);
                if (userData instanceof ApiError_1.default)
                    return next(ApiError_1.default.internalServerError('An error occurred while registration'));
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
                return next(res.json(userData));
            }
            catch (e) {
                return next(ApiError_1.default.internalServerError('An error occurred while registration'));
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = yield userService_1.default.login(req.body);
                if (userData instanceof ApiError_1.default)
                    return next(ApiError_1.default.internalServerError('An error occurred while login'));
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
                return next(res.json(userData));
            }
            catch (e) {
                return next(ApiError_1.default.internalServerError('An error occurred while login'));
            }
        });
    }
    logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const token = yield userService_1.default.logout(refreshToken);
                res.clearCookie('refreshToken');
                return next(res.json(token));
            }
            catch (e) {
                return next(ApiError_1.default.internalServerError("An error occurred while logging out"));
            }
        });
    }
    activate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const link = req.params.link;
                const user = yield models_1.default.users.findOne({ where: { user_activation_link: link } });
                if (!user)
                    return next(ApiError_1.default.notFound("User not found"));
                user.user_state = true;
                yield user.save();
                return res.redirect(process.env.CLIENT_URL);
            }
            catch (e) {
                return next(ApiError_1.default.internalServerError('An error occurred while activating account'));
            }
        });
    }
    refresh(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const userData = yield userService_1.default.refresh(refreshToken);
                if (userData instanceof ApiError_1.default)
                    return next(ApiError_1.default.internalServerError('An error occurred while refreshing'));
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
                return next(res.json(userData));
            }
            catch (e) {
                return next(ApiError_1.default.internalServerError("An error occurred while refreshing"));
            }
        });
    }
}
exports.default = new UserController();
