import Task from "../models/Task.js";

const getAllTasks = async () => {
    try {
        return await Task.findAll();
    } catch (error) {
        console.log("Erro ao listar tasks: ", error);
    }
}

const createTask = async (data)=>{
    try {
        return await Task.create(data);
    } catch (error) {
        console.log("Erro ao criar data Task: ", error);
    }
}

const deleteTask = async (id)=>{
    try {
        const user = await Task.findOne({
            where:{id: id}
        });

        if(user){
            await user.destroy();
            return true;
        }
        return false;
    } catch (error) {
        console.log("Erro ao deletar task: ", error);
    }
}

export default {
    getAllTasks,
    createTask,
    deleteTask
};