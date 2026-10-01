import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const rutaArchivo = join('./datos', 'biblioteca.json');

async function obtenerLibros() {
  try {
    const datos = await readFile(rutaArchivo, 'utf-8');
    return JSON.parse(datos);
  } catch (error) {
    console.error('Error al leer los libros:', error);
    throw error;
  }
}

export default {
  obtenerLibros
};
