const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Vamos contar? [Digite um número] ', (num) => {
    
    for (let index = 0; index < num; index++) {
        console.log(index + 1);
        
    }
    readline.close()
})