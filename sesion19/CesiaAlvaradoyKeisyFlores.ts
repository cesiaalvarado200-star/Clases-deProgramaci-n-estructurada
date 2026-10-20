// Función para calcular el pago de horas extra.
// Recibe una tarifa por hora y una cantidad variable de registros de horas.
// Si no se indica la tarifa, se utiliza $4.00 por defecto.
function calcularHorasExtra(tarifa: number = 4.00, ...horas: number[]): number {
    // Si no hay registros de horas extra, el pago será $0.00.
    if (horas.length === 0) {
        return 0;
    }

    // Se suman todas las horas registradas.
    const totalHoras = horas.reduce((total, hora) => total + hora, 0);

    // Se multiplica el total de horas por la tarifa.
    return totalHoras * tarifa;
}


// Función para calcular el salario bruto.
// Suma el salario base más el pago de horas extra.
function calcularSalarioBruto(salarioBase: number, pagoHorasExtra: number): number {
    return salarioBase + pagoHorasExtra;
}


// Callback que recibe los años de antigüedad y devuelve el bono.
type CalcularBono = (antiguedad: number) => number;


// Función que determina el bono según la antigüedad.
// Se reciben los años y una función callback para calcular el bono.
function obtenerBono(antiguedad: number, callback: CalcularBono): number {
    return callback(antiguedad);
}


// Función que calcula el bono.
// Si tiene 3 años o más, recibe $20.00.
// Si tiene menos de 3 años, no recibe bono.
const calcularBonoPorAntiguedad: CalcularBono = (antiguedad) => {
    if (antiguedad >= 3) {
        return 20.00;
    }

    return 0;
};


// Función para calcular el salario neto.
// El descuento es opcional. Si no se proporciona, se considera $0.00.
function calcularSalarioNeto(
    salarioBruto: number,
    bono: number,
    descuento?: number
): number {
    // Si no existe descuento, se utiliza 0.
    const descuentoAplicado = descuento ?? 0;

    // Se suma el bono al salario bruto y se resta el descuento.
    return salarioBruto + bono - descuentoAplicado;
}


// Función recursiva para sumar todos los salarios netos.
// Si el arreglo está vacío, devuelve 0.
function calcularTotalNomina(salarios: number[]): number {
    // Caso base: cuando no quedan salarios por sumar.
    if (salarios.length === 0) {
        return 0;
    }

    // Se toma el primer salario y se llama nuevamente
    // a la función con el resto del arreglo.
    return salarios[0] + calcularTotalNomina(salarios.slice(1));
}


// Datos originales de los empleados.
const empleados = [
    {
        nombre: "Ana",
        salarioBase: 450.00,
        horasExtra: [5, 2],
        antiguedad: 4,
        descuento: 46.16
    },
    {
        nombre: "Luis",
        salarioBase: 550.00,
        horasExtra: [],
        antiguedad: 1,
        descuento: 56.38
    },
    {
        nombre: "Marta",
        salarioBase: 480.00,
        horasExtra: [2],
        antiguedad: 5,
        descuento: 49.20
    }
];


// Arreglo donde se guardarán solamente los salarios netos.
const salariosNetos: number[] = [];


// Recorremos cada empleado para realizar los cálculos.
empleados.forEach((empleado) => {

    // Calculamos el pago de las horas extra.
    const pagoHorasExtra = calcularHorasExtra(4.00, ...empleado.horasExtra);

    // Calculamos el salario bruto.
    const salarioBruto = calcularSalarioBruto(
        empleado.salarioBase,
        pagoHorasExtra
    );

    // Calculamos el bono mediante el callback.
    const bono = obtenerBono(
        empleado.antiguedad,
        calcularBonoPorAntiguedad
    );

    // Calculamos el salario neto.
    const salarioNeto = calcularSalarioNeto(
        salarioBruto,
        bono,
        empleado.descuento
    );

    // Guardamos el salario neto en el arreglo.
    salariosNetos.push(salarioNeto);

    // Mostramos el resultado de cada empleado.
    console.log(
        `${empleado.nombre}: $${salarioNeto.toFixed(2)}`
    );
});


// Calculamos el total de la nómina utilizando recursividad.
const totalNomina = calcularTotalNomina(salariosNetos);


// Mostramos el total que la empresa debe disponer para pagar la nómina.
console.log(`Total de la nómina: $${totalNomina.toFixed(2)}`);