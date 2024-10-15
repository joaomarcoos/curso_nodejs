const express = require('express')
const exphbs = require('express-handlebars');

//instance app express
const app = express();

//config - handlebars
app.engine('handlebars', exphbs.create({}).engine);
app.set('view engine', 'handlebars')

app.get('/post', (req, res)=>{
    post = {
        title: 'Post 1',
        content: 'Conteúdo do post 1',
        description: 'Est é o post',
        comments: 'que legal'
    }

    res.render('blogpost', {post})
})

app.get('/dashboard', (req, res)=>{
    const item = ['item a', 'item b', 'item c']
    res.render('dashboard', {item})
})
app.get('/', (req, res)=>{

    const user = {
        name: 'João',
        age: 28,
        city: 'São Paulo'
    }

    const auth = true;
    const approved = false;
    res.render('home', {data: user, auth, approved});
})

app.listen(3000, ()=>{
    console.log('App online');
})