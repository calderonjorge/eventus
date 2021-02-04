import express from 'express';
import router from './routes/routes.js';
import db from './database/db.js';
import './database/joinDB.js'


const app = express();
const port = process.env.PORT || 1000;


app.set('view engine', 'ejs');
app.set('views', 'views/pages');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use('/', router);

//Arranco el servidor
app.listen(port, () => {
  db.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch(error => console.log(error));
  console.log(`El app ha arrancado en el puerto ${port}`);
});
