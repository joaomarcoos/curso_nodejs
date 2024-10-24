import {express, urlencoded } from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/database.js';
import router from './src/routers/index.js'

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(
    express(
        urlencoded({
            extended: true
        })
))

app.use('api', router);

sequelize.sync().then(()=>{
    console.log('Database connected and synchronized');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(erro => console.log(`Unable to connect to the database: `, erro));

