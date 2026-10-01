import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const rutaReporte = join('./datos', 'reporte_inventario.json');

async function guardarReporteProcedimiento(req, res, next) {
  try {
    if (!req.resultadoProcedimiento) {
      return res.status(500).json({ mensaje: 'No se generó el resultado del procedimiento.' });
    }

    const resultadoJSON = JSON.stringify(req.resultadoProcedimiento, null, 2);
    await writeFile(rutaReporte, resultadoJSON, 'utf-8');

    return next();
  } catch (error) {
    console.error('Error al guardar el reporte:', error);
    return res.status(500).json({ mensaje: 'No se pudo guardar el reporte.' });
  }
}

export default guardarReporteProcedimiento;
