const minimist = require('minimist');

//Modulo Externo
const args = minimist(process.argv.slice(2));

//Modulo Interno
const soma = require('./modulo').soma;

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b);