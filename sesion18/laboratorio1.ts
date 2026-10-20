//Laboratorio 2.
//Integrantes: Cesia Esmeralda Alvarado Solano. Codigo:u20260708
//             Keisy Andrea Flores Alvarado. Codigo:u20260702


// Ocupamos type para defenir la esrtructura de los empleados, se nos hara mas facil trabajar con ellos y nos dara  mas seguridad trabajar con ellos 
type Empleado = {
    nombre: string;
    salarioBase: number;
    horasExtra: number[];
    antiguedad: number;
    descuento?: number;
};
//Definimos nuestros empleados , donde empleado[] es un arreglo de tipo Empleado, y cada objeto dentro del arreglo tiene las propiedades definidas en el type Empleado
const empleados: Empleado[] = [
    { nombre: "Ana", salarioBase: 450, horasExtra: [5, 2], antiguedad: 4, descuento: 46.16 },
    { nombre: "Luis", salarioBase: 550, horasExtra: [], antiguedad: 1, descuento: 56.38 },
    { nombre: "Marta", salarioBase: 480, horasExtra: [2], antiguedad: 5, descuento: 49.20 }
];

//  Función para calcular pago de horas extra, funcion tipo rest
function calcularHorasExtra(tarifa: number = 4, ...registros: number[]): number {
    if (registros.length === 0) return 0;
    return registros.reduce((total, horas) => total + horas * tarifa, 0);
}

// Función para calcular salario bruto
function calcularSalarioBruto(salarioBase: number, pagoHorasExtra: number): number {
    return salarioBase + pagoHorasExtra;
}

// Callback para calcular bono, donde el return antiguedad >= 3 ? 20 : 0; es una forma de simplificar el if else, y nos permite retornar directamente el valor del bono sin necesidad de utilizar un bloque de código adicional.
//Es una manera mas facil, esta forma la hemos implementado en nuestros ejercicios de practica, por esa forma nos sentimos mas comodas utilizando esta forma de escribir el codigo, y nos permite tener un codigo mas limpio y legible.
function determinarBono(antiguedad: number): number {
    return antiguedad >= 3 ? 20 : 0;
}

//Tenemos nuestra funcion calcularSalarioNeto, que recibe el salario bruto, el bono y un descuento opcional, y devuelve el salario neto del empleado, si no se proporciona un descuento, se asume que es 0.
function aplicarBono(antiguedad: number, callback: (antiguedad: number) => number): number {
    return callback(antiguedad);
}

// Función para calcular salario neto, donde hace una verificación si el descuento es undefined, en caso de que lo sea, se asume que es 0, y se retorna el salario neto sin descuento, de lo contrario se aplica el descuento al salario neto.
function calcularSalarioNeto(salarioBruto: number, bono: number, descuento?: number): number {
    if (descuento !== undefined) {
        return salarioBruto + bono - descuento;
    }
    return salarioBruto + bono;
}

// Función recursiva para acumular nómina, ocupamos .length para determinar si el arreglo esta vacio y en caso de que no lo este, utilizamos slice para ir reduciendo el arreglo hasta llegar al caso base.
function acumularNomina(salarios: number[]): number {
    if (salarios.length === 0) return 0; // Caso base
    return salarios[0] + acumularNomina(salarios.slice(1)); // Paso recursivo
}

// Presentación de resultados, ocupamos let para poder modificar el arreglo de salarios netos a medida que vamos calculando los salarios de cada empleado
let salariosNetos: number[] = [];

//Utilizamos forEach para iterar sobre los empleados y calcular su salario neto, además de acumular el total de la nómina, y es una forma más funcional de trabajar con arreglos en TypeScript.
empleados.forEach(emp => {
    const pagoHorasExtra = calcularHorasExtra(4, ...emp.horasExtra);
    const salarioBruto = calcularSalarioBruto(emp.salarioBase, pagoHorasExtra);
    const bono = aplicarBono(emp.antiguedad, determinarBono);
    const salarioNeto = calcularSalarioNeto(salarioBruto, bono, emp.descuento);

    salariosNetos.push(salarioNeto);//Agregamos el salario neto al arreglo de salarios netos

    console.log(`${emp.nombre}: $${salarioNeto.toFixed(2)}`);//Mostramos el nombre del empleado y su salario neto con dos decimales
});

const totalNomina = acumularNomina(salariosNetos); //Calculamos el total de la nómina utilizando la función recursiva acumularNomina y mostramos el resultado en consola con dos decimales
console.log(`Total de la nómina: $${totalNomina.toFixed(2)}`);

// Comprobaciones con los datos de los empleados 
// empleado sin horas extra
console.log("Luis sin horas extra:", calcularHorasExtra(4, ...[])); // 0 

// llamada sin descuento
console.log("Ana sin descuento:", calcularSalarioNeto(450 + calcularHorasExtra(4, 5, 2), aplicarBono(4, determinarBono)));

// arreglo vacío
console.log("Nómina vacía:", acumularNomina([])); // 0