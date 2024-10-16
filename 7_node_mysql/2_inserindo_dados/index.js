import express from 'express';
import exphbs from 'express-handlebars';
import mysql from 'mysql2';
import bookRoute from './router/bookRouter.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded(
    { extended: true }
));

// Config - Handlebars
app.engine('handlebars', exphbs.create({}).engine);
app.set('view engine', 'handlebars');

// Config - Static Css
app.use(express.static('public'));

// Config - Middlewares

app.use('/book', bookRoute)



app.get('/', (req, res) => {
    res.render('home');
});

// Config - Mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
})

//Config - Listening port

app.listen(3000, () => console.log('Server running on port 3000'));

export default connection;