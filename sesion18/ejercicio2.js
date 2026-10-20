// Ejercicio 2. Ahorro acumulado durante varios días
// Una estudiante decide iniciar un reto de ahorro: el primer día guarda un dólar, el segundo día dos dólares, el tercero tres dólares y así sucesivamente.
// Desarrolle una función recursiva que determine cuánto habrá ahorrado al finalizar una cantidad N de días.
// La función debe:
// Recibir la cantidad de días.
// Retornar la suma desde 1 hasta N.
// Definir qué resultado corresponde cuando la cantidad de días es 0.
// Reducir la cantidad de días en cada llamada recursiva.
// Validar que no se utilicen cantidades negativas.
// Realice manualmente el seguimiento para N = 5 y prediga el resultado antes de ejecutar el programa.
// Función recursiva para calcular el ahorro acumulado durante varios días.
// Recibe la cantidad de días y devuelve un resultado de tipo number.
function calcularAhorro(dias) {
    // Caso base: cuando no quedan días, el ahorro acumulado es 0.
    if (dias === 0) {
        return 0;
    }
    // Se suma la cantidad de días actual y se vuelve a llamar
    // a la función reduciendo los días en 1.
    return dias + calcularAhorro(dias - 1);
}
// Se establece la cantidad de días que se desea calcular.
const dias = 5;
// Se verifica si la cantidad de días es negativa.
if (dias < 0) {
    // Si es negativa, se muestra un mensaje indicando que el valor no es válido.
    console.log("Debe ingresar un número entero mayor o igual que cero.");
}
else {
    // Se llama a la función para calcular el ahorro acumulado.
    const ahorro = calcularAhorro(dias);
    // Se muestra en pantalla la cantidad total ahorrada.
    console.log(`Al finalizar ${dias} días, habrá ahorrado $${ahorro}.`);
}
export {};
