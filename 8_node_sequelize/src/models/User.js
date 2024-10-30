import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';

const User = sequelize.define('User', {

    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation:{
        type: DataTypes.STRING,
        required: true
    },
    newsletter:{
        type: DataTypes.BOOLEAN,
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

export default User;