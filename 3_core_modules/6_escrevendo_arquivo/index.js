const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if(req.url === '/obrigado.html'){
        fs.readFile('obrigado.html', 'UTF-8', (err, data)=>{
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(`<h1>Página não encontrada</h1>`);
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            }
        })
        return;
    }

    if(!name){
        fs.readFile('index.html', 'UTF-8', (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }else{
        fs.stat('arquivo.txt',(err, stats)=>{
            if(err || !stats.size){

                fs.writeFile('arquivo.txt','Nome dos Visitantes \n\n', (err)=>{
                    if(err){
                        console.error(err);
                    }
        
                    appendName(name, res);
                });
            }else{
                appendName(name, res);
            }
        })

        return;
        
    }
});

function appendName(name, res){


    fs.appendFile('arquivo.txt', name + '\n', (err, data)=>{
        res.writeHead(302, {
            Location: '/obrigado.html'
        })
        return res.end();
    })
    
}

server.listen(3000, () => {
    console.log('Server rodando na porta 3000');
});