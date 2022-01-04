// //1 importando enrutador de express
import { Router } from 'express';
//Creamos la instancia de Router en la variable author
const author = Router();
//registramos la ruta de author y su respuesta
author.use('/author', (_, res) => {
  res.send('author');
});
//EXportamos la variable author
//que servira la respuesta en index
// cuando caiga en la direccion /author
export default author;
