import express from 'express'
import dotenv from 'dotenv'
import pool from './conexion.bd.mjs'
 
//Busa en la raiz el servidor si no le pones nada
dotenv.config()

const PUERTO = process.env.PUERTO || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/v1/productos', async (req,res)=>{
   const resultado = await pool.query('SELECT * FROM productos');
   console.log(resultado);
   res.json({resultado});
})

app.get('/api/v1/productos/:id', async (req,res)=>{
   const id = Number(req.params.id)
   const resultado = await pool.query('SELECT * FROM productos WHERE');
   console.log(resultado);
   res.json({resultado});
})

app.post('/api/v1/productos', async (req,res)=>{
   const datos = req.body
   console.log(datos)
   const resultado = await pool.query('INSERT INTO productos(producto,)');
   console.log(resultado);
   res.json({resultado});
})

app.listen(PUERTO)