const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Eventos personalizados

readline.question('Quantos anos vc tem?', (ano)=>{
    eventEmitter.on('start', (ano) => {
        console.log(`${ano}`);
    });
    eventEmitter.emit('start', ano);
    readline.close();
})



