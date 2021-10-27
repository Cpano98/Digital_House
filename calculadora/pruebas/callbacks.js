function agregarHttp(url) {
    return "http://"+url;
}

function largoString(str){
    return str.length;
}

function procesar(array,funcion){
        // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array.
    let strSize=array.length;
    lista = [];
    
    for(let i=0; i<strSize;i++){
        lista.push(funcion(array[i]));
    }
    return lista
}

console.log("Hola")
console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp))
console.log(procesar(["www.google.com","www.yahoo.com"],largoString))