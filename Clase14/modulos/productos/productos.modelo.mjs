import productos from "../../datos/productos.mjs";

//GET todoss
 export function obtenerProductos(){
    return productos
}

export function obtenerProducto(id){
    //fitramos
    const producto = productos.filter(producto => producto.id == id)
    return producto
}