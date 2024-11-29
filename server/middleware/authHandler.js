"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_js_1 = __importDefault(require("../error/ApiError.js"));
const tokenService_js_1 = __importDefault(require("../service/tokenService.js"));
function authHandler(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader)
            return next(ApiError_js_1.default.unauthorized("Unauthorized"));
        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken)
            return next(ApiError_js_1.default.unauthorized("Unauthorized"));
        const userDate = tokenService_js_1.default.validateAccessToken(accessToken);
        if (!userDate)
            return next(ApiError_js_1.default.unauthorized("Unauthorized"));
        // req.user = userDate
        next();
    }
    catch (e) {
        return next(ApiError_js_1.default.unauthorized("Unauthorized"));
    }
}
exports.default = authHandler;
