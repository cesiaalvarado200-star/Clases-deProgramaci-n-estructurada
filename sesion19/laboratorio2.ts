// ==========================================
// CALCULADORA DE NÓMINA RECURSIVA
// ==========================================

// ------------------------------------------
// INTERFAZ DEL EMPLEADO
// ------------------------------------------

interface Empleado {
    nombre: string;
    salario: number;
    horasExtra: number;
    bono: number;
}

// ------------------------------------------
// 1. PARÁMETRO OPCIONAL
// ------------------------------------------

// El apellido es opcional.
function nombreCompleto(nombre: string, apellido?: string): string {

    if (apellido !== undefined) {
        return `${nombre} ${apellido}`;
    }

    return nombre;
}

// ------------------------------------------
// 2. PARÁMETRO POR DEFECTO
// ------------------------------------------

// Si no se indica bono, se utiliza 50.
function calcularBono(bono: number = 50): number {
    return bono;
}

// ------------------------------------------
// 3. REST
// ------------------------------------------

// Permite sumar cualquier cantidad de valores.
function sumarValores(...valores: number[]): number {

    let total = 0;

    for (const valor of valores) {
        total += valor;
    }

    return total;
}

// ------------------------------------------
// 4. CALLBACK
// ------------------------------------------

// Esta función recibe otra función.
// Por eso es una función de orden superior.
function aplicarOperacion(
    salario: number,
    operacion: (valor: number) => number
): number {

    return operacion(salario);
}

// Callback para descuento del 10%.
const descuentoEmpleado = (salario: number): number => {
    return salario * 0.90;
};

// Callback para descuento del 5%.
const descuentoEspecial = (salario: number): number => {
    return salario * 0.95;
};

// ------------------------------------------
// 5. GENÉRICO
// ------------------------------------------

function identidad<T>(dato: T): T {
    return dato;
}

// ------------------------------------------
// 6. PASO POR VALOR
// ------------------------------------------

// Cambia solamente la copia local del número.
function duplicarSalario(salario: number): void {

    salario = salario * 2;

    console.log("Dentro de la función:", salario);
}

// ------------------------------------------
// 7. MODIFICACIÓN DE OBJETO
// ------------------------------------------

// Modificamos una propiedad del objeto.
function aumentarBono(empleado: Empleado): void {

    empleado.bono = empleado.bono + 25;
}

// ------------------------------------------
// 8. CALCULAR HORAS EXTRA
// ------------------------------------------

function calcularHorasExtra(
    salario: number,
    horas: number
): number {

    const valorHora = salario / 160;

    return valorHora * 1.5 * horas;
}

// ------------------------------------------
// 9. CALCULAR SALARIO NETO
// ------------------------------------------

function calcularSalarioNeto(
    empleado: Empleado,
    descuento: (salario: number) => number
): number {

    const horasExtra = calcularHorasExtra(
        empleado.salario,
        empleado.horasExtra
    );

    const bono = calcularBono(empleado.bono);

    const salarioBruto = sumarValores(
        empleado.salario,
        horasExtra,
        bono
    );

    return aplicarOperacion(
        salarioBruto,
        descuento
    );
}

// ------------------------------------------
// 10. RECURSIVIDAD
// ------------------------------------------

// Suma los salarios de todos los empleados.
function calcularNominaRecursiva(
    empleados: Empleado[],
    posicion: number = 0
): number {

    // CASO BASE
    if (posicion >= empleados.length) {
        return 0;
    }

    // Calculamos el salario del empleado actual.
    const salarioActual = calcularSalarioNeto(
        empleados[posicion],
        descuentoEmpleado
    );

    // LLAMADA RECURSIVA
    return salarioActual +
        calcularNominaRecursiva(
            empleados,
            posicion + 1
        );
}

// ------------------------------------------
// DATOS DE PRUEBA
// ------------------------------------------

const empleados: Empleado[] = [

    {
        nombre: "Andrea",
        salario: 600,
        horasExtra: 5,
        bono: 50
    },

    {
        nombre: "Carlos",
        salario: 700,
        horasExtra: 3,
        bono: 75
    },

    {
        nombre: "María",
        salario: 800,
        horasExtra: 2,
        bono: 0
    }
];

// ------------------------------------------
// PRUEBA DE PARÁMETRO OPCIONAL
// ------------------------------------------

console.log(
    nombreCompleto("Andrea")
);

console.log(
    nombreCompleto("Andrea", "López")
);

// ------------------------------------------
// PRUEBA DEL PASO POR VALOR
// ------------------------------------------

let salarioPrueba = 500;

duplicarSalario(salarioPrueba);

console.log(
    "Fuera de la función:",
    salarioPrueba
);

// ------------------------------------------
// PRUEBA DE MODIFICACIÓN DE OBJETO
// ------------------------------------------

console.log(
    "Bono antes:",
    empleados[0].bono
);

aumentarBono(empleados[0]);

console.log(
    "Bono después:",
    empleados[0].bono
);

// ------------------------------------------
// PRUEBA DEL GENÉRICO
// ------------------------------------------

const codigo = identidad<number>(123);

const departamento = identidad<string>("Desarrollo");

console.log("Código:", codigo);
console.log("Departamento:", departamento);

// ------------------------------------------
// CÁLCULO FINAL DE NÓMINA
// ------------------------------------------

const totalNomina = calcularNominaRecursiva(
    empleados
);

console.log(
    "Total de nómina:",
    totalNomina.toFixed(2)
);