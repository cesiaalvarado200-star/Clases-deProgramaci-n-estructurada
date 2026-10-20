// Reto 1 · Flexibilidad · El saludo incompleto · 
// La recepción de una actividad universitaria necesita generar un
//  saludo con nombre y, cuando esté disponible, apellido. Construyan 
//  una función que resuelva ambos casos sin mostrar la palabra undefined.
function generarSaludo(nombre, apellido) {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}!`;
    }
    else {
        return `Hola, ${nombre}!`;
    }
}
const saludo1 = generarSaludo("Juan", "Pérez");
const saludo2 = generarSaludo("María");
console.log(saludo1); // Salida: Hola, Juan Pérez!
console.log(saludo2); // Salida: Hola, María! 
export {};
