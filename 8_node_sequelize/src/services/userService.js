import { raw } from 'express';
import User from '../models/User.js'

const createUser = async (data) =>{

    return await User.create(data);
}
const getAllUsers = async () => {
    return await User.findAll({raw: true});
}

const getUserById = async (id) => {
    return await User.findOne({ raw: true,
        where:{id: id}
    });
}

const updateUser = async (id, data) => {
    const user = await User.findById(id);

    if(user){
        return await user.update(data);
    }

    return null;
}

const deleteUser = async (id) => {
    const user = await User.findById(id);

    if(user){
        await user.remove();
        return true;
    }

    return false;
}

export default{
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
 
}
