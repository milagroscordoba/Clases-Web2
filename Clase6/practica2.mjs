const productos = [
    {
        nombre: 'pantalon',
        precio: 100
    },
    {
        nombre: 'remera',
        precio: 50
    }
]

//Filter => .filter()
// ver doc en MDN -> 

//Nuevo arreglo
const productosFiltrados = productos.filter((producto)=>{
    return Number(producto.precio) < 100  //Transformar el dato

})

console.log(productosFiltrados)

//Find -> .find()
//Ver doc en MDN -> Arrays
// <-- devuelve el elemento encontrado, si no undefined o null