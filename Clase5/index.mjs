async function obtenerUsuario(){
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuario = await respuesta.json() //arreglo de objetos
}