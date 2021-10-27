//Operacion de Multiplicar
function multiplicar(numA, numB){
    if (numA==0 || numB==0 ){
        return 0;
    }else{
        return numA * numB;
    }
}

module.exports = multiplicar;