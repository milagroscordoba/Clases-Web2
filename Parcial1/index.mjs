import express from 'express';
import rutasLibros from './rutas/rutas.mjs';

const app = express();
const PUERTO = 3000;

// Montamos las rutas de libros bajo el prefijo /api/libros.
app.use('/api/libros', rutasLibros);

app.listen(PUERTO, () => {
  console.log(`Servidor de biblioteca en http://localhost:${PUERTO}`);
});
