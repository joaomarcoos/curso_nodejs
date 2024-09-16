const fs = require('fs') // File System

fs.readFile('arquivo.txt', 'utf-8', (error,data) =>{
    if(error){
        console.log('Error:', error);
        return;
    }

    console.log(data);
});