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
        required: true
    },
    neighborhood:{
        type: DataTypes.STRING,
        required: true
    },
    city:{
        type: DataTypes.STRING,
        required: true
    },
    state:{
        type: DataTypes.STRING,
        required: true
    },
    country:{
        type: DataTypes.STRING,
        required: true
    }
})

User.hasMany(Address);
Address.belongsTo(User);


export default Address;