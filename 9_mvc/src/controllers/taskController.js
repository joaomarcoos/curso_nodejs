import taskService from '../services/taskService.js';


const getAllTasks = async (req, res)=>{
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        
    }
}

const createTask = async (req, res)=>{
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        
    }
}

const deleteTask = async (req, res)=>{
    try {
        const user = await taskService.deleteTask(req.params.id);
        res.status(204).json({message: "task deleted successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export default {
    getAllTasks,
    createTask,
    deleteTask
};