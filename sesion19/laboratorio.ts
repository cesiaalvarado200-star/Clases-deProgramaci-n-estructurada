//Calculadora de Nómina recursiva: aplica recursividad y paso por valor/referencia

// Interfaz que representa los datos de un empleado
interface Empleado {
    nombre: string;
    salario: number;
    horasExtra: number;
}

// Array de empleados
const empleados: Empleado[] = [
    {
        nombre: "Ana",
        salario: 500,
        horasExtra: 5
    },
    {
        nombre: "Carlos",
        salario: 600,
        horasExtra: 3
    },
    {
        nombre: "María",
        salario: 550,
        horasExtra: 4
    }
];


// Función que calcula el pago por horas extra
function calcularHorasExtra(
    horas: number,
    valorHoraExtra: number = 5
): number {
    return horas * valorHoraExtra;
}


// PASO POR VALOR
// El número se copia dentro del parámetro salario.
// Cambiar salario dentro de la función no cambia la variable original.
function aumentarSalario(salario: number, aumento: number): number {
    salario = salario + aumento;
    return salario;
}


// PASO POR REFERENCIA
// Se recibe el objeto empleado y se modifica directamente su salario.
function actualizarSalario(
    empleado: Empleado,
    aumento: number
): void {
    empleado.salario = aumentarSalario(empleado.salario, aumento);
}


// Función que calcula el salario final de un empleado
function calcularSalarioFinal(empleado: Empleado): number {
    const pagoExtra = calcularHorasExtra(empleado.horasExtra);

    return empleado.salario + pagoExtra;
}


// FUNCIÓN RECURSIVA
// Calcula el total de la nómina recorriendo el array.
function calcularNominaRecursiva(
    empleados: Empleado[],
    posicion: number = 0
): number {

    // Caso base
    if (posicion >= empleados.length) {
        return 0;
    }

    // Salario del empleado actual
    const salarioActual = calcularSalarioFinal(empleados[posicion]);

    // Llamada recursiva
    return salarioActual +
        calcularNominaRecursiva(empleados, posicion + 1);
}


// Aplicamos un aumento al primer empleado
actualizarSalario(empleados[0], 50);


// Mostrar información de cada empleado
for (const empleado of empleados) {

    const salarioFinal = calcularSalarioFinal(empleado);

    console.log(
        `Empleado: ${empleado.nombre}`
    );

    console.log(
        `Salario base: $${empleado.salario}`
    );

    console.log(
        `Horas extra: ${empleado.horasExtra}`
    );

    console.log(
        `Salario final: $${salarioFinal}`
    );

    console.log("-------------------------");
}


// Calcular la nómina total utilizando recursividad
const totalNomina = calcularNominaRecursiva(empleados);

console.log(`Total de la nómina: $${totalNomina}`);