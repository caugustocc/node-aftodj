/**
 * Instituto Tecnologigo Gustavo A. Madero
 * Author: Carlos Augusto Cruz Cruz
 * Student ID: 181130080
 * Date:03/12/2021
 * Subject: FullStack web Development
 */
//Importando Express
import Express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import { ROOT_DIR } from './helpers/path.helper.js';
//importar enrutadores
// import { router as adminRoute } from './routes/admin.route.js';
// //importando homeroute.js
// import homeRoute from './routes/home.route.js';
//creamos constante donde declaramos la extencion y la pagina maestra
const hbsTemplateEngine = engine({
  extname: '.hbs',
  defaultLayout: 'main',
});
//importar enrutadores
import { router as adminRoute } from './routes/admin.route.js';
//importando homeroute.js
import homeRoute from './routes/home.route.js';

console.log(`variable de entorno ${process.env.NODE_ENV || 'No establecido'}`);

//Express instancia
const app = Express();
//registro el motor de las plantillas
app.engine('hbs', hbsTemplateEngine);

//seleccionar en la app el motor a utilizar
app.set('view engine', 'hbs');
//establecer las rutas de las vistas
app.set('views', path.join(ROOT_DIR, 'views'));

//la lectura de datos desde el cliente
app.use(Express.urlencoded({ extended: false }));

//creando variables de puerto Importando
const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '0.0.0.0';

//primer middleware
app.use((req, _, next) => {
  //mesaje en consola
  console.log(`👉  Se ha realizado la peticion: "${req.method} : ${req.path}"`);
  //Seguimis al siguiente middleware
  next();
});

//En espera de la peticion del cliente
app.listen(PORT, IP, () => {
  console.log(`Servidor Escuchando en: ${IP}:${PORT}`);
});
