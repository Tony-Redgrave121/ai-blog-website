"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = __importDefault(require("../db.js"));
const sequelize_1 = require("sequelize");
const users = db_js_1.default.define("users", {
    user_id: { type: sequelize_1.DataTypes.UUID, primaryKey: true },
    user_name: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    user_email: { type: sequelize_1.DataTypes.STRING, allowNull: true, unique: true },
    user_password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    user_img: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    user_state: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    user_activation_link: { type: sequelize_1.DataTypes.STRING, allowNull: false }
}, { timestamps: false });
const user_tokens = db_js_1.default.define("user_token", {
    user_token_id: { type: sequelize_1.DataTypes.UUID, primaryKey: true },
    user_token_body: { type: sequelize_1.DataTypes.STRING(1000), allowNull: false },
    user_token_date: { type: sequelize_1.DataTypes.DATE, allowNull: false, defaultValue: sequelize_1.DataTypes.NOW },
}, { timestamps: false });
users.hasMany(user_tokens, { foreignKey: { name: 'user_id', allowNull: false }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
user_tokens.belongsTo(users, { foreignKey: 'user_id' });
const models = {
    users,
    user_tokens
};
exports.default = models;
