import addressService from '../services/addressService.js';

const createAddress = async (req, res) =>{
    try{
        const address = await addressService.createAddress(req.body);
        //console.log(address);
        res.render('home');
        //res.status(201).json(address);
    } catch (error){
        res.status(400).json({error: error.message});
    }
}

export default {
    createAddress
}