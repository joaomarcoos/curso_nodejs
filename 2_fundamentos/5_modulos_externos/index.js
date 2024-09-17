const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];

console.log(nome);

const profissao = args['profissao'];

console.log(profissao);

console.log(`O nome dele é ${nome} e sua profissão é ${profissao}`);