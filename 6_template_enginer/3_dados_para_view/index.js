const express = require('express')
const exphbs = require('express-handlebars');

//instance app express
const app = express();

//config - handlebars
app.engine('handlebars', exphbs.create({}).engine);
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})
app.get('/', (req, res)=>{

    const user = {
        name: 'João',
        age: 28,
        city: 'São Paulo'
    }

    const auth = true;
    res.render('home', {data: user, auth});
})

app.listen(3000, ()=>{
    console.log('App online');
})