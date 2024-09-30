const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if (req.url === '/obrigado.html') {
        fs.readFile('obrigado.html', 'UTF-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`<h1>Página não encontrada</h1>`);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            }
        })
        return;
    }

    if(req.url === '/delete' && req.method === 'POST') {
        fs.unlink('arquivo.txt', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`<h1>Erro ao excluir o arquivo</h1>`);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <h1>Arquivo excluído com sucesso!</h1>
                    <form action="/" method="GET">
                        <button type="submit">Voltar</button>
                    </form>
                    `);
            }
        })
        return;
    }

    if (req.url === '/limpar' && req.method === 'POST') {

        fs.stat('arquivo.txt', 'UTF-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`<h1>Erro ao verificar o arquivo</h1>`);
                return;
            }

            if (data.size === 0) {
                res.writeHead(200, { 'accept-charset': 'UTF-8', 'Content-Type': 'text/html' });
                res.end(`
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>

                    <h1>Arquivo já está vazio!</h1>
                    <form action="/" method="GET">
                        <button type="submit">Voltar</button>
                    </form>
                    `);
                return;
            } else {
                fs.writeFile('arquivo.txt', '', (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        res.end(`<h1>Erro ao limpar o arquivo</h1>`);
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html', });
                        res.end(`
                            <h1>Arquivo limpo com sucesso!</h1>
                            <form action="/" method="GET">
                                <button type="submit">Voltar</button>
                            </form>
                            `);
                    }
                });
            }
        })
        return;
    }

    if (!name) {
        fs.readFile('index.html', 'UTF-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    } else {
        fs.stat('arquivo.txt', (err, stats) => {
            if (err || !stats.size) {
                fs.writeFile('arquivo.txt', 'Nome dos Visitantes \n\n', (err) => {
                    if (err) {
                        console.error(err);
                    }

                    appendName(name, res);
                });
            } else {
                appendName(name, res);
            }
        })

        return;

    }
});

function appendName(name, res) {

    fs.readFile('arquivo.txt', 'UTF-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end(`<h1>Erro ao ler o arquivo</h1>`);
            return;
        }

        if (data.includes(name)) {
            res.writeHead(200, {'Content-Type': 'text/html' });
            res.end(`
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>

                    <h1>Nome já existe!</h1>
                    <form action="/" method="GET">
                        <button type="submit">Voltar</button>
                    </form>
                    `);
        }else{
            fs.appendFile('arquivo.txt', name + '\n', (err, data) => {
                res.writeHead(302, {
                    Location: '/obrigado.html'
                })
                return res.end();
            })
        }
    });

}

server.listen(3000, () => {
    console.log('Server rodando na porta 3000');
});