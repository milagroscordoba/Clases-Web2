import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const rutaArchivo = join('./datos', 'biblioteca.json');

async function obtenerLibros() {
  try {
    // Leemos el archivo en cada petición para consultar los datos actualizados.
    const datos = await readFile(rutaArchivo, 'utf-8');
    return JSON.parse(datos);
  } catch (error) {
    console.error('Error al leer los libros:', error);
    // Propagamos el error para que el controlador responda al cliente.
    throw error;
  }
}

export default {
  obtenerLibros
};
