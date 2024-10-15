const express = require('express')
const exphbs = require('express-handlebars');

//instance app express
const app = express();

//config - handlebars
app.engine('handlebars', exphbs.create({}).engine);
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
    res.render('home');
})

app.listen(3000, ()=>{
    console.log('App online');
})