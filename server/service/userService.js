"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const tokenService_1 = __importDefault(require("./tokenService"));
const ApiError_1 = __importDefault(require("../error/ApiError"));
const models_1 = __importDefault(require("../model/models"));
const sequelize_1 = require("sequelize");
const uuid = __importStar(require("uuid"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUserImgService_1 = __importDefault(require("./getUserImgService"));
const mailService_1 = __importDefault(require("./mailService"));
class UserService {
    registration(user_body, user_files) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_name, user_email, user_password } = user_body;
            const userCheck = yield models_1.default.users.findOne({ where: sequelize_1.Sequelize.or({ user_email: user_email }, { user_name: user_name }) });
            if (userCheck)
                return ApiError_1.default.badRequest(`User with email or name already exists`);
            let userImg = null;
            if (user_files) {
                if (user_files.user_img)
                    userImg = (0, getUserImgService_1.default)(user_name + '/user_img', user_files.user_img, user_files.user_img.name);
            }
            const hash_user_password = yield bcrypt_1.default.hash(user_password, 5);
            const user_id = uuid.v4(), user_activation_link = uuid.v4();
            yield models_1.default.users.create({ user_id: user_id, user_name, user_email, user_password: hash_user_password, user_img: userImg, user_activation_link: user_activation_link });
            const tokens = tokenService_1.default.generateToken({ user_id, user_email, user_name });
            yield tokenService_1.default.saveToken(user_id, tokens.refreshToken);
            yield mailService_1.default.sendMail(user_email, `${process.env.API_URL}/activate/${user_activation_link}`);
            if (userImg instanceof ApiError_1.default)
                return ApiError_1.default.badRequest(`Error with user image creation`);
            return Object.assign(Object.assign({}, tokens), { user_name: user_name, user_img: userImg });
        });
    }
    login(user_body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_email, user_password } = user_body;
            const user = yield models_1.default.users.findOne({ where: { user_email: user_email } });
            if (!user)
                return ApiError_1.default.notFound("UserPage not found");
            if (!user)
                return ApiError_1.default.unauthorized("Unauthorized");
            let comparePassword = bcrypt_1.default.compareSync(user_password, user.user_password);
            if (!comparePassword)
                return ApiError_1.default.forbidden('Password is incorrect');
            const tokens = tokenService_1.default.generateToken({ user_id: user.user_id, user_email });
            yield tokenService_1.default.saveToken(user.user_id, tokens.refreshToken);
            return Object.assign(Object.assign({}, tokens), { user_id: user.user_id, user_name: user.user_name, user_img: user.user_img });
        });
    }
    logout(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tokenService_1.default.deleteToken(refreshToken);
        });
    }
    refresh(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken)
                return ApiError_1.default.unauthorized("Unauthorized");
            const userData = tokenService_1.default.validateRefreshToken(refreshToken);
            const tokenDB = tokenService_1.default.findToken(refreshToken);
            if (!userData || !tokenDB || typeof userData === "string")
                return ApiError_1.default.unauthorized("Unauthorized");
            const user = yield models_1.default.users.findOne({ where: { user_id: userData.user_id } });
            if (!user)
                return ApiError_1.default.unauthorized("Unauthorized");
            const tokens = tokenService_1.default.generateToken({ user_id: user.user_id, user_email: user.user_email });
            yield tokenService_1.default.saveToken(user.user_id, tokens.refreshToken);
            yield tokenService_1.default.deleteToken(refreshToken);
            return Object.assign(Object.assign({}, tokens), { user_id: user.user_id, user_name: user.user_name, user_img: user.user_img });
        });
    }
}
exports.default = new UserService();
