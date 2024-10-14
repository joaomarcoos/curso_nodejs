const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const basePath = path.join(__dirname, 'template');

app.get('/users/:id', (req, res)=>{
    const id = req.params.id

    res.json({id});
})

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`);
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})