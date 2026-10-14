import express from 'express'
import dotenv from 'dotenv'
import rutasModulosProductos from './modulos/productos/productos.rutas.mjs'
 
//Busa en la raiz el servidor si no le pones nada
dotenv.config()

console.log(process.env.PUERTO)

const PUERTO = process.env.PUERTO || 3000

const app = express()
app.use(rutasModulosProductos)

app.listen(PUERTO)