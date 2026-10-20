// Reto 4 · Colaboración · La operación intercambiable · 8 minutos
// Construyan una función que reciba un número y una operación. Utilicen esa
//  misma función para calcular el cuadrado y 
// la raíz cuadrada mediante dos callbacks tipados.
function calcularOperacion(numero, operacion) {
    return operacion(numero);
}
// Ejemplo de uso con callbacks tipados
const cuadrado = (num) => num * num;
// Ejemplo de uso con callbacks tipados
const raizCuadrada = (num) => Math.sqrt(num);
// Ejemplo de uso
const resultadoCuadrado = calcularOperacion(5, cuadrado);
const resultadoRaizCuadrada = calcularOperacion(25, raizCuadrada);
console.log(`El cuadrado de 5 es: ${resultadoCuadrado}`); // Salida: El cuadrado de 5 es: 25
console.log(`La raíz cuadrada de 25 es: ${resultadoRaizCuadrada}`); // Salida: La raíz cuadrada de 25 es: 5
export {};
