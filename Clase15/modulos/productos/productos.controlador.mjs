import * as modelo from './productos.modelo.mjs'
import * as vista from './productos.vista.mjs'

 export function obtenerProductos(req,res){
    const productos =  modelo.obtenerProductos()
    const vista = vista.obtenerProductos(productos)
   //modelado vista
    res.json(productos)

}

export function obtenerProducto(req,res){
    const id = Number(req.params.id)
    const producto = modelo.obtenerProducto()
    res.json(producto)
}