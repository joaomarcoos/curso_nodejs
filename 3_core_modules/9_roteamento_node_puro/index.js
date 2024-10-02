const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 3000;


const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true);
    const filename = query.pathname.substring(1);

    if(filename.includes('html')){
        
        if(fs.existsSync(filename)){
            fs.readFile(filename, 'utf8', (err, data)=>{
                res.writeHead(200, {"Content": 'text/html'});
                res.write(data);
                res.end();
            })
        }else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('Arquivo não encontrado!');
            return;
        }

        return;
    }
    
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('Não é um arquivo HTML!');
});

server.listen(port, () => {
    console.log('rodando...');
});