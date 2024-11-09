import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';
import Address from "./Address.js";

const User = sequelize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})


User.hasMany(Address);

export default User;