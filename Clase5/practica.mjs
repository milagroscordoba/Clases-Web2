const numeros  = [1,2,3,4,5,6]

//map (mapear el arreglo) recorre el arreglo completo
//numeros.map(recorrer)

//function recorrer (){}

//funcion flecha(son anonimas)
//const recorrer = ()=>{}

//callback
// const nuevoArreglo = numeros.map((numero)=>{
//     console.log(numero)
//     return numero + 2
// })
// console.log(nuevoArreglo)

//Trabajar con un objeto

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

const ProducotosConInteres = productos.map((producto)=>{
    const ProductoCambiado = {
        nombre:producto.nombre,
        precio: producto.precio * 1.1
    }
    return ProductoCambiado
})

console.log(ProducotosConInteres)

//Callback
function x(cb){
    const n = 1
    //Pasamos un valor a la funcion de callback
    cb(n)
}
// const saludo = ()=>{
//    console.log('Se ejecuto el CB')    
//}
// X(saludo()) <--- No pasar la funcion ejecutada, sacar parentesis
x((n) =>{
    console.log('Se ejecuto el cb con el numero pasado por x: '+ n)
})