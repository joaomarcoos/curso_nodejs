import userService from '../services/userService.js';

const createUser = async (req, res) =>{
    try{
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error){
        res.status(400).json({error: error.message});
    }
}

const getUsers = async (req, res) =>{
    try{
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const getUserById = async (req, res) =>{
    try{
        const user = await userService.getUserById(req.params.id);
        if(!user) return res.status(404).json({error: 'User not found'});
        res.json(user);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const updateUser = async (req, res) =>{
    try{
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if(!updatedUser) return res.status(404).json({error: 'User not found'});
        res.json(updatedUser);
    } catch (error){
        res.status(400).json({error: error.message});
    }
}

const deleteUser = async (req, res) =>{
    try{
        await userService.deleteUser(req.params.id);
        res.status(204).json();
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

export default {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
}