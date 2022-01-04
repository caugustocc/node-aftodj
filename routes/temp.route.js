//1 importando enrutador de express
import { Router } from 'express';
//Encapsulamos la instancia de Router en la variable temp
const temp = Router();
//registramos la ruta (en este caso raiz) dentro de un middleware
temp.use('/', (req, res) => {
  res.send(`<html>
  <head>
      <h1> 🔴Temperatura</h1>
      <br>
  </head>
<body>
   <h2>🌡Conversor Grados</h2>
</body>
</html>`);
});
//Exportamos el unico valor que seria temp
//que ya incluye la respuesta en dado caso que la peticion
//sea en raiz
export default temp;
