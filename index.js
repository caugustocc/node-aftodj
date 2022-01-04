/**
 * Instituto Tecnologigo Gustavo A. Madero
 * Author: Carlos Augusto Cruz Cruz
 * Student ID: 181130080
 * Date:03/12/2021
 * Subject: FullStack web Development
 * Recuperacion
 */
//Importando Express
import Express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import { ROOT_DIR } from './helpers/path.helper.js';

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
app.get('/home', (req, res) => {
  res.render('home');
});
//la lectura de datos desde el cliente
app.use(Express.urlencoded({ extended: false }));
//-------ASOCIANDO RUTAS A MIDDLEWARE------

app.use((req, _, next) => {
  console.log(`Peticion realizada: "${req.method} : ${req.path}"`);
  next();
});
//Registando el middleware que maneja el servicio de archivos estaticos
app.use(Express.static(path.join(ROOT_DIR, 'public')));
//Se agrega a la aplicacion la ruta admin

app.use('/', adminRoute);
app.use(homeRoute);
app.use((_, res, next) => {
  console.log(` 🚫 Recurso no encontrado: '404.html'`);
  res.render('404');
});

//En espera de la peticion del cliente
app.listen(3000, `0.0.0.0`, () => {
  console.log(`Servidor Escuchando en http://192.168.1.66`);
});
