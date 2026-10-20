let array = [5, 12, 8, 20, 7, 15, 30, 9];
// • Compruebe si el número 20 existe dentro del array.
function verificarNumero(numero, arreglo) {
    if (arreglo.includes(numero)) {
        console.log(`el numero ${numero} esta dentro del arreglo`);
    }
    else {
        console.log(`el numero ${numero} no esta en el arreglo`);
    }
}
verificarNumero(20, array);
// • Determine la posición en la que se encuentra el número 15.
function verificarPosicion(numero, arreglo) {
    if (arreglo.indexOf(numero) === -1) {
        console.log(`el numero ${numero} no esta en el arreglo`);
    }
    else {
        console.log(`el numero ${numero} esta en el indice ${arreglo.indexOf(numero)}`);
    }
}
verificarPosicion(155, array);
// • Encuentre el primer número mayor a 10.
let PrimerMayor10 = array.find((numero) => { return numero > 10; });
console.log(PrimerMayor10);
// • Obtenga todos los números mayores a 10.
let numerosMayores10 = array.filter((numero) => { return numero > 10; });
console.log(numerosMayores10);
export {};
