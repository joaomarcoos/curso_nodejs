const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.write('Oi server');
    res.end();
});

server.listen(port, () => {
    console.log('Servidor rodando na porta 3000');
});