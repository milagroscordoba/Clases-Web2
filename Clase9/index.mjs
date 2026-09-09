import express from 'express'

const PUERTO = 3000

const app = express()

app.get('/', (req,res) =>{
    const usuarios = [
        {
            nombre: 'Andres',
            email: 'asenn@iees21.edu.ar'
        },
        {
            nombre:'Joaquin',
            email:'joag@gmail.com'
        },
    ] 
    res.json(usuarios)
})

app.get('/saludo', (req,res) =>{
    res.json({mensaje:'Hola'})
})

//Rutas con parametros

app.get('/:id', (req,res) =>{
    const id = Number(req.params.id)// Si no hay un numero crea un objeto NaN
    const usuarios = [
        {
            id: 1,
            nombre: 'Andres',
            email: 'asenn@iees21.edu.ar'
        },
        {
            id: 2,
            nombre:'Joaquin',
            email:'joag@gmail.com'
        },
    ]  
    //Filtramos a partir de ID de usuario
    //Condicion: el id del parametro debe ser igual al id del objeto usuario
    const usuariosFiltrados = usuarios.filter(((usuario)=>{
        return usuario.id === id
    }))
    if(usuariosFiltrados.length > 0 ){
        res.json(usuariosFiltrados)
    }else{
        //res.status(404)
        res.status(404).json({mensaje: 'Usuario no encontrado'})
    }
    res.json(usuariosFiltrados)
})



app.post('/', (req,res) =>{
    const usuarios = [
        {
            nombre: 'Andres',
            email: 'asenn@iees21.edu.ar'
        },
        {
            nombre:'Joaquin',
            email:'joag@gmail.com'
        },
    ] 
    res.json(usuarios)
})


app.listen(PUERTO,()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`)
})