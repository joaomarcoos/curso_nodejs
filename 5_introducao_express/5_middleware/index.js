const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const basePath = path.join(__dirname, 'template');

const checkAuth = (req, res, next) => {
    req.authStatus = false;

    if(req.authStatus) {
        console.log('Logado');
        next();
    }else{
        console.log('Não logado');
        res.status(401).send('Você não está logado!');
        next();
    }
}

app.use(checkAuth);

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`);
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})