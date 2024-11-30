import sequelize from '../db.js'
import {DataTypes} from "sequelize"

const users = sequelize.define("users", {
    user_id: {type: DataTypes.UUID, primaryKey: true},
    user_name: {type: DataTypes.STRING, allowNull: false},
    user_email: {type: DataTypes.STRING, allowNull: false, unique: true},
    user_password: {type: DataTypes.STRING, allowNull: false},
    user_img: {type: DataTypes.STRING, allowNull: true},
    user_state: {type: DataTypes.BOOLEAN, defaultValue: false},
    user_activation_link: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

const user_tokens = sequelize.define("user_token", {
    user_token_id: {type: DataTypes.UUID, primaryKey: true},
    user_token_body: {type: DataTypes.STRING(1000), allowNull: false},
    user_token_date: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
}, {timestamps: false})

users.hasMany(user_tokens, {foreignKey: {name: 'user_id', allowNull: false}, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
user_tokens.belongsTo(users, {foreignKey: 'user_id'})

const models = {
    users,
    user_tokens
}

export default models