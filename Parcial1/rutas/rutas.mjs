import express from 'express';
import controlador from '../controlador/controlador.mjs';
import guardarReporteProcedimiento from '../middleware/middleware.mjs';

const rutas = express.Router();

rutas.get('/', controlador.obtenerTodosLosLibros);
rutas.get('/:id', controlador.obtenerLibroPorId);

rutas.get(
  '/procedimiento/estadisticas',
  controlador.generarReporteInventario,
  guardarReporteProcedimiento,
  controlador.responderReporteInventario
);

export default rutas;
