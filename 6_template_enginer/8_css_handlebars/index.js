const express = require('express')
const exphbs = require('express-handlebars');

//instance app express
const app = express();

//config - handlebars
app.engine('handlebars', exphbs.create({
    partialsDir: ['views/partials'],
}).engine);
app.set('view engine', 'handlebars')

//css
app.use(express.static('public'))

app.get('/post', (req, res)=>{
    post = {
        title: 'Post 1',
        content: 'Conteúdo do post 1',
        description: 'Est é o post',
        comments: 'que legal'
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res)=>{
    const posts = [
        {
            title: 'Post 1',
            content: 'Conteúdo do post 1',
            description: 'Est é o post 1',
        },
        {
            title: 'Post 2',
            content: 'Conteúdo do post 2',
            description: 'Est é o post 2',
        }
    ]

    res.render('blog', {posts})
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