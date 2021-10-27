//Requerimiento de Módulos
var sumar = require('./modulos_operaciones/sumar');
var restar = require('./modulos_operaciones/restar');
var multiplicar = require('./modulos_operaciones/multiplicar');
var dividir = require('./modulos_operaciones/dividir');

//Pruebas Unitarias -->

console.log(sumar(5,6));
console.log(sumar(0,15));
console.log(sumar(6,5));

console.log(restar(6,5));
console.log(restar(10,5));

console.log(multiplicar(6,5));
console.log(multiplicar(0,5));
console.log(multiplicar(5,0));

console.log(dividir(0,5));
console.log(dividir(5,0));

console.log(dividir(30,5));
console.log(dividir(5,30)); 
