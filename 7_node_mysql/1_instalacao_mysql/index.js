import express from 'express';
import exphbs from 'express-handlebars';
import mysql from 'mysql2';

const app = express();

// Config - Handlebars
app.engine('handlebars', exphbs.create({}).engine);
app.set('view engine', 'handlebars');

// Config - Middlewares
app.use(express.json());



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