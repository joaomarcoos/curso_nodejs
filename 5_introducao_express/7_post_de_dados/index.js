const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const basePath = path.join(__dirname, 'template');

app.use(
    express.urlencoded(
        {
            extended: true,
        }
    )
)

app.use(express.json())

app.get('/user/:name', (req, res)=>{
    const userName = req.params.name;
    const getUser = users.find(user => user.name === userName)

    if(!getUser){
        res.status(404).json({message: "Não encontrado"})
    }

    res.status(200).json({message: `Usuário ${getUser.name} encontrado`})
})

app.get('/users/add', (req, res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

const users = [];
app.post('/users/save', (req, res)=>{
    const {name, age} = req.body;
    const user = {name, age};
    users.push(user);

    res.status(201).json({message: 'Criado', users});
})

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`);
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})