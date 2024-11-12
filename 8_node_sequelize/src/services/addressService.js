import Address from "../models/Address.js";

const createAddress = async (data) =>{
    try{
        //console.log('Data: ', data);
        return await Address.create(data);
    }catch(error){
        console.log('Erro: ', error.message);
    }
}


export default {
    createAddress
};