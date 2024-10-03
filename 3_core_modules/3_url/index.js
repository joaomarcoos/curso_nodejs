const url = require('url');

const endereco = 'https://www.google.com/catalogo?produto=cadeira';

const parsedUrl = new url.URL(endereco); // permite decompor a URL

console.log(parsedUrl.hostname); 
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produto'));
