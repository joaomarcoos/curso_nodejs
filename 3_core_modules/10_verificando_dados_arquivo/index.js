const fs = require('fs');

fs.stat('arquivo.txt', (err, stats)=>{
    if(err){
        console.error('Error:', err);
        return;
    }

    console.log('Tamanho do arquivo:', stats.size);
    console.log('É um arquivo?', stats.isFile());
    console.log('É um diretório?', stats.isDirectory());
    console.log('É um link simbólico', stats.isSymbolicLink());
    console.log('data de criação', stats.ctime);
    console.log('É um arquivo mode', stats.mode);
})