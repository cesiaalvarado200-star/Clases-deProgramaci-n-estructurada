// Ejercicio: Calculadora de Nómina Recursiva

// Una empresa necesita calcular el salario total de varios empleados. Para ello, se tiene un arreglo con los salarios de los empleados.

// Desarrolla un programa en TypeScript que cumpla con lo siguiente:

// Crear un arreglo con los salarios de 5 empleados.
// Crear una función recursiva llamada calcularTotal que reciba el arreglo y una posición, y calcule la suma total de los salarios.
// Crear una función llamada aumentarSalario que reciba el arreglo por referencia y aumente cada salario en un 10%.
// Crear una función llamada calcularBono que reciba un salario por valor y calcule un bono del 5%, sin modificar el salario original.
// Mostrar en consola:
// Los salarios originales.
// El total de salarios antes del aumento.
// Los salarios después del aumento.
// El bono de un empleado.
// El total de salarios después del aumento.
// Solución

// Arreglo con los salarios de los empleados
let salarios: number[] = [500, 650, 700, 800, 900];

// Función recursiva para calcular el total de los salarios
function calcularTotal(salarios: number[], posicion: number): number {

    // Caso base: cuando llegamos al final del arreglo
    if (posicion === salarios.length) {
        return 0;
    }

    // Se suma el salario actual y se llama nuevamente a la función
    return salarios[posicion] + calcularTotal(salarios, posicion + 1);
}

// Función que recibe el arreglo por referencia
// y aumenta cada salario en un 10%
function aumentarSalario(salarios: number[]): void {

    for (let i = 0; i < salarios.length; i++) {
        salarios[i] = salarios[i] * 1.10;
    }
}

// Función que recibe el salario por valor
// y calcula un bono del 5%
function calcularBono(salario: number): number {

    return salario * 0.05;
}

// Mostrar salarios originales
console.log("Salarios originales:", salarios);

// Calcular total antes del aumento
let totalAntes = calcularTotal(salarios, 0);
console.log("Total antes del aumento:", totalAntes);

// Aumentar salarios
aumentarSalario(salarios);

// Mostrar salarios después del aumento
console.log("Salarios después del aumento:", salarios);

// Calcular bono del primer empleado
let bono = calcularBono(salarios[0]);
console.log("Bono del primer empleado:", bono);
// Calcular total después del aumento
let totalDespues = calcularTotal(salarios, 0);
console.log("Total después del aumento:", totalDespues);