import userService from '../services/userService.js';

const createUser = async (req, res) =>{
    try{
        const user = await userService.createUser(req.body);
        res.render('home');
        // res.status(201).json(user);
    } catch (error){
        res.status(400).json({error: error.message});
    }
}

const getUsers = async (req, res) =>{
    try{
        const users = await userService.getAllUsers();
        res.render('listUsers', {users: users});
        // res.json(users);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const getUserById = async (req, res) =>{
    try{
        const user = await userService.getUserById(req.params.id);
        if(!user) return res.status(404).json({error: 'User not found'});
        // 
        res.render('userView', {user})
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const getUpdateUser = async (req, res) =>{
    try{
        const user = await userService.getUserById(req.params.id);
        if(!user) return res.status(404).json({error: 'User not found'});
        // 
        res.render('updateUser', {user})
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

const updateUser = async (req, res) =>{
    try{
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if(!updatedUser) return res.status(404).json({error: 'User not found'});
        res.render('home');
    } catch (error){
        res.status(400).json({error: error.message});
    }
}

const deleteUser = async (req, res) =>{
    try{
        await userService.deleteUser(req.params.id);
        res.render('listUsers');
        //res.status(204).json();
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
    getUpdateUser
}