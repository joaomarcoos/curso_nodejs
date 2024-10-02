const os = require('os');

console.log('Sistema Operacional:', os.platform());
console.log('cpu:', os.cpus());
console.log('memory:', os.freemem());
console.log(os.homedir());
console.log(os.type());