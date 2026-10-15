import express from 'express'
import dotenv from 'dotenv'
import pg from './conexion.bd.mjs'
 
//Busa en la raiz el servidor si no le pones nada
dotenv.config()

const PUERTO = process.env.PUERTO || 3000

const app = express()

app.get('/api/v1/productos', async (req,res)=>{
   const resultado = await pg.query('SELECT * FROM productos');
   console.log(resultado);
   res.json({});
})

app.listen(PUERTO)