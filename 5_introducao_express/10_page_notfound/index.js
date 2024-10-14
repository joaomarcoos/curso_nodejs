const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const basePath = path.join(__dirname, 'template')
const usersRoute = require('./router/users.js')

//Midlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());
app.use(express.static('public'))

//Rotas
app.use('/users', usersRoute)


app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`);
})

app.use((req, res, next)=>{
    res.status(404).sendFile(`${basePath}/notFound.html`);
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})