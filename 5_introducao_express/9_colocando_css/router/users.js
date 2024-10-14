const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../template');
console.log(basePath)

router.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

router.get('/:name', (req, res)=>{
    const userName = req.params.name;
    const getUser = users.find(user => user.name === userName)

    if(!getUser){
        res.status(404).json({message: "Não encontrado"})
    }

    res.status(200).json({message: `Usuário ${getUser.name} encontrado`})
})

const users = [];

router.post('/save', (req, res)=>{
    const {name, age} = req.body;
    const user = {name, age};
    users.push(user);

    res.status(201).json({message: 'Criado', users});
})

module.exports = router;