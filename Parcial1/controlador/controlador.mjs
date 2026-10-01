import modelo from '../modelo/modelo.mjs';

async function obtenerTodosLosLibros(req, res) {
  try {
    const datos = await modelo.obtenerLibros();

    if (datos.libros.length > 0) {
      return res.status(200).json(datos.libros);
    }

    return res.status(404).json({ mensaje: 'No hay libros en la biblioteca.' });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al leer los libros.' });
  }
}

async function obtenerLibroPorId(req, res) {
  try {
    const idBuscado = Number(req.params.id);

    // Rechazamos IDs no numéricos, decimales o menores que 1 antes de buscar el libro.
    if (!Number.isInteger(idBuscado) || idBuscado <= 0) {
      return res.status(400).json({ mensaje: 'El ID debe ser un número entero positivo.' });
    }

    const datos = await modelo.obtenerLibros();
    const libroEncontrado = datos.libros.find(libro => libro.id === idBuscado);

    if (libroEncontrado) {
      return res.status(200).json(libroEncontrado);
    }

    return res.status(404).json({ mensaje: `El libro con ID ${idBuscado} no existe.` });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al buscar el libro.' });
  }
}

async function generarReporteInventario(req, res, next) {
  try {
    const datos = await modelo.obtenerLibros();
    const libros = datos.libros;

    const totalLibros = libros.length;
    const librosDisponibles = libros.filter(libro => libro.disponible === true).length;
    const librosPrestados = totalLibros - librosDisponibles;

    const resultadoProcedimiento = {
      proceso_ejecutado: 'Estadísticas e inventario de la biblioteca',
      // Registramos la fecha y hora de ejecución en formato ISO 8601 y zona UTC.
      fecha_ejecucion: new Date().toISOString(),
      resultado: {
        total_catalogo: totalLibros,
        disponibles: librosDisponibles,
        prestados: librosPrestados
      }
    };
    // Compartimos el resultado con el middleware mediante la petición actual.
    req.resultadoProcedimiento = resultadoProcedimiento;
    return next();
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al calcular el inventario.' });
  }
}

function responderReporteInventario(req, res) {
  return res.status(200).json(req.resultadoProcedimiento);
}

export default {
  obtenerTodosLosLibros,
  obtenerLibroPorId,
  generarReporteInventario,
  responderReporteInventario
};
