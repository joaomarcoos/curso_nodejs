import express from 'express';
import dotenv from 'dotenv';
import exphbs from 'express-handlebars';
import sequelize from './src/config/database.js';
import router from './src/routers/index.js'
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(
    express.urlencoded({
            extended: true
        })
)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure o caminho das views para `src/views`
app.set('views', path.join(__dirname, 'src', 'views'));

// Config - Handlebars
app.engine('handlebars', exphbs.create({}).engine);
app.set('view engine', 'handlebars');

// Config - Static Css
app.use(express.static('public'));

app.use('/api', router);

app.get('/', (req, res)=>{
    res.render('home');
})

sequelize
//.sync()
.sync({ force: true })
.then(()=>{
    console.log('Database connected and synchronized');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(erro => console.log(`Unable to connect to the database: `, erro));

