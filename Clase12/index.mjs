import express from 'express'
import {chequearClave} from './middlewares.mjs'

const PUERTO  = 3000
const CLAVE = '123'
const app = express()

app.use(express.json())

app.listen(PUERTO)

const datos = [
    {
        compu:158,
        activo: true,
        clave: "123"
    }
]

app.get('/estado',(req,res) =>{
    console.log()
    res.json(datos)
})

app.post('/estado',chequearClave,(req,res)=>{
        datos.push(req.body)
        return res.status(201).json({mensaje:'Se ha guardado el dato', datos: req.body})

})



