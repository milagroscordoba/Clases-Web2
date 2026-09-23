//Exportacion nombrada- Funcion de declaracion

export function  chequearClave(req, res, next){
    const clave = req.body.clave
    if (clave === CLAVE){
        next()
    }
    //defecto
    res.status(403).json({mensaje: 'clave incorrecta'})
}
