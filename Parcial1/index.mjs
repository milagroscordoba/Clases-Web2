import express from 'express'

const PUERTO = 3000
const app = express()

app.listen(PUERTO)

app.get('/productos',(req,res) => {
    console.log()
    res.json(datos)
})