console.log("Aplicación de Tareas")

let tarea = {
    titulo:"Practicar el SW",
    descripcion:"Hay que repasaaar",
    estado: "Pendientes"
}

let tareas = [
    {
        titulo:"Practicar el SW",
        descripcion:"Hay que repasaaar",
        estado: "Pendientes"
    },
    {
        titulo:"HOLII",
        descripcion:"Contraseñas",
        estado: "Cerrado"
    }
]

for (let indice=0; indice<tareas.length;indice++){
    console.log((indice+1) + ' _ '+tareas[indice].titulo);
    console.log((indice+1) + ' _ '+tareas[indice].estado);
}

console.log(tareas);

function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let contador=0;
    for (i=0; i<numero;i++){
        if(i%2 != 0){
            contador=contador+1;
        }else{
            contador=contador
        }
    }
    return contador
}

console.log(JSON.stringify(tareas));

console.log(noParesDeContarImparesHasta(4))