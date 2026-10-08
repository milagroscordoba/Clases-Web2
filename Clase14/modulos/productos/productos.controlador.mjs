import * as modelo from './productos.modelo.mjs'

 export function obtenerProductos(req,res){
    const productos =  modelo.obtenerProductos()
   //modelado vista
    res.json(productos)

}

export function obtenerProducto(req,res){
    const id = Number(req.params.id)
    const productos = modelo.obtenerProducto()
    res.json(productos)
}