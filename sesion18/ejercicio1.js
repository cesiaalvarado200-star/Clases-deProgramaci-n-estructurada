// Ejercicio 1. Factorial para organizar paquetes
// Una empresa de San Miguel desea conocer de cuántas maneras diferentes puede organizar una cantidad determinada de paquetes. Para apoyar el cálculo, deberá desarrollar una función recursiva que obtenga el factorial de un número entero.
// La función debe:
// Recibir un número entero.
// Retornar un resultado de tipo number.
// Contener un caso base claramente identificable.
// Reducir el número recibido en cada llamada.
// Rechazar o informar cuando se reciba un número negativo.
// Antes de ejecutar, represente en papel las llamadas que se producen al calcular el factorial de 4.
// Ejercicio 1. Factorial para organizar paquetes
// Se crea una función recursiva para calcular el factorial de un número entero.
// La función recibe un número de tipo number y devuelve un resultado de tipo number.
function calcularFactorial(numero) {
    // Caso base: si el número es 0 o 1, el factorial es 1.
    if (numero === 0 || numero === 1) {
        return 1;
    }
    // Se multiplica el número actual por el factorial del número anterior.
    // La función se vuelve a llamar reduciendo el número en 1.
    return numero * calcularFactorial(numero - 1);
}
// Se establece el número al que se le calculará el factorial.
const numero = 4;
// Se verifica si el número ingresado es negativo.
if (numero < 0) {
    // Si es negativo, se muestra un mensaje indicando que no es válido.
    console.log("Debe ingresar un número entero mayor o igual que cero.");
}
else {
    // Se llama a la función para calcular el factorial del número.
    const factorial = calcularFactorial(numero);
    // Se muestra en pantalla el resultado obtenido.
    console.log(`El factorial de ${numero} es ${factorial}.`);
}
export {};
