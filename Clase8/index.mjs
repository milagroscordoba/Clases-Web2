import express from 'express'

const PUERTO = 3000

const app = express()

app.get('/',(req,res) => {
    res.send('Hola con send')
    //res.send({mensajes:'hola'})
}) 


app.listen(PUERTO,() =>{
    console.log(`Servidor express corriendo en el puerto ${PUERTO}`)
})
