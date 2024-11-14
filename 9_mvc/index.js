import express from 'express';
import exphbs from 'express-handlebars';
import dotenv from 'dotenv';
import sequelize from './src/config/database.js';
import router from './src/router/router.js';
import './src/models/Task.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();


//middleware
app.use(express.json());
app.use(
    express.urlencoded
    (
        { extended: true }
    )
);
//Config - Static Css
app.use(express.static('public'));

app.use('/api', router);

//Config Handlebars
app.engine('handlebars', exphbs.create({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
    defaultLayout: 'main',
}).engine)

app.set('view engine', 'handlebars');

sequelize
    .sync()
    //.sync({force: true})
    .then(
        () => {
            console.log('Conectado ao banco de dados');

            app.listen(PORT, () => {
                console.log('Servidor rodando na porta 3000');
            })
        }
    ).catch(erro => console.log(`Error: ${erro}`))