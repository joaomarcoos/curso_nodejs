import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';
import User from './User.js';

const Address = sequelize.define('Address', {

    street:{
        type: DataTypes.STRING,
        required: true
    },
    number:{
        type: DataTypes.STRING,
        allowNull: false
    },
    neighborhood:{
        type: DataTypes.STRING,
        allowNull: false
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    state:{
        type: DataTypes.STRING,
        allowNull: false
    },
    country:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


Address.belongsTo(User);

export default Address;