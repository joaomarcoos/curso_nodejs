import User from '../models/User.js'

const createUser = async (data) =>{
    try{
        const newsletterValue = data.newsletter === 'on'? true : false;

        data.newsletter = newsletterValue;

        return await User.create(data);
    }catch(error){
        console.log('Erro: ', error.message);
    }
    
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
    const user = await User.findOne({
        where:{id: id}
    });

    console.log(data);

    if (Array.isArray(data.newsletter)) {
        data.newsletter = data.newsletter.includes('on');
    } else {
        data.newsletter = data.newsletter === 'on';
    }

    if(user){
        return await user.update(data);
    }

    return null;
}

const deleteUser = async (id) => {
    const user = await User.findOne({
        where:{id: id}
    });

    if(user){

        await user.destroy();
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
