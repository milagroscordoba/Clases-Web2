import http from 'node:http'

// Instanciamos un servidor
const servidor = http.createServer((peticion, respuesta)=>{
    //console.log(peticion)
    //console.log('Entra peticion')
    //console.log(peticion.url, peticion.method)
    //respuesta.end('Hola desde el servidor')

    // if(peticion.url === '/'){
    //     respuesta.end('estamos en la raiz')
    // } else if(peticion.url === '/anto'){
    //     respuesta.end('hola que tal')
    // }else{
    //     respuesta.statusCode = 404
    //     respuesta.end('No encontrado')
    // }

    if(peticion.url === '/' && peticion.method === 'GET'){
       return  respuesta.end('estamos en la raiz')
    }
    if(peticion.url === '/anto' && peticion.method === 'GET'){
       return  respuesta.end('hola que tal')
    }      
    if(peticion.url === '/anto' && peticion.method === 'POST'){
        return respuesta.end('hola que tal en POST')
    }
    
    respuesta.statusCode = 404
    return respuesta.end('No encontrado')

 
})

//  Abrimos un puerto y lo ponemos a escuchar
servidor.listen(3000, () =>{
    console.log('servidor arrancado')
})