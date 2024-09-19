const fs = require('fs');

fs.writeFile('arquivo2.txt', 'Oi', (erro)=>{
    setTimeout(()=>{
        console.log('Arquivo criado');
    }, 1000)
})

console.log('Fim');