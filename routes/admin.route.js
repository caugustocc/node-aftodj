//1 importando enrutador de express
import { Router } from 'express';
//---------Base de datos volatil en la ram
export const products = [];
// 2 crear una instancias del enrutador
export const router = Router();
//respuesta de recursos
router.get('/usd2mxn', (_, res) => {
  console.log(`sirviendo recursos: 'usd2mxn.html'`);
  res.render('usd2mxn');
});
router.post('/usd2mxn', (req, res) => {
  //Desestructurando el body de la peticion
  const { name } = req.body;
  //guardar en la BD el nombre del producto
  products.push({ name });
  //redirecciono a la pantalla de inicio
  res.redirect('/');
  // Respondiendo en JSON el body
});
