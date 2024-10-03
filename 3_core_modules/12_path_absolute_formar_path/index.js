const path = require('path');

// Path absoluto
console.log(path.resolve('arquivo.txt'));

//forma um path

const midFolder = 'relatorios';
const file = 'arquivo1.txt';

const finalFile = path.join('/', 'arquivo', midFolder, file);

console.log(finalFile);