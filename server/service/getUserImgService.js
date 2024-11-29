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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = __importStar(require("uuid"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const ApiError_js_1 = __importDefault(require("../error/ApiError.js"));
function getUserImgService(folderName, file, fileName) {
    try {
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const resFile = uuid.v4() + "." + fileExtension;
        const folderPath = path.resolve("server/DB/static", folderName);
        if (!fs.existsSync(folderPath))
            fs.mkdirSync(folderPath, { recursive: true });
        else
            return ApiError_js_1.default.internalServerError('An error occurred while fetching the user');
        file.mv(path.resolve(folderPath, resFile));
        return resFile;
    }
    catch (e) {
        return ApiError_js_1.default.internalServerError('An error occurred while fetching the user');
    }
}
exports.default = getUserImgService;
