import {Router} from 'express'
import * as controlador from './productos.controlador.mjs'
//import { config } from 'dotenv'
import {URL_BASE} from '../../config.mjs'


const  rutasModulosProductos = new Router()

rutasModulosProductos.get(`${URL_BASE}/productos`, controlador.obtenerProductos)

rutasModulosProductos.get('/api/v1/productos/:id', controlador.obtenerProductos)

export default rutasModulosProductos
