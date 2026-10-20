/* Ejercicio 2: Gestión de edades
Se posee el siguiente array de edades: [15, 21, 17, 30, 18, 16, 25, 14, 20] Realice las
siguientes operaciones:
• Obtenga únicamente las edades mayores o iguales a 18.
• Ordene las edades obtenidas de menor a mayor.
• Busque la primera edad que sea mayor a 20.
• Calcule la suma de todas las edades de las personas mayores de edad. */

let edades =[15, 21, 17, 30, 18, 16, 25, 14, 20];
//Obtenga únicamente las edades mayores o iguales a 18.
let mayoresEdad:number[]=edades.filter((edad) => { return edad >= 18});
console.log(mayoresEdad);
//Ordene las edades obtenidas de menor a mayor.
let ordenadas:number[]=mayoresEdad.sort((a, b) => a - b);
console.log(ordenadas);
//Busque la primera edad que sea mayor a 20.
let primeraMayor20:number|undefined=mayoresEdad.find((edad) => { return edad > 20});
console.log(primeraMayor20);
//Calcule la suma de todas las edades de las personas mayores de edad.
let suma:number=mayoresEdad.reduce((acumulador, edad) => { return acumulador + edad}, 0);
console.log(suma);

