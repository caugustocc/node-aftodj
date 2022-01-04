//1 importando enrutador de express
import { Router } from 'express';

//importando el acceso a la BD
import { products } from './admin.route.js';

const home = Router();
// rutas
home.get(`/author`, (_, res) => {
  res.send('<h1> Mi APP </h1>\n 🎯 Carlos Cruz');
});
home.get([`/`, `/home`], (_, res) => {
  console.log(`☕Author ${JSON.stringify(products)}`);
  console.log(`sirviendo recursos: 'author.html'`);
  res.render('author');
});

export default home;
