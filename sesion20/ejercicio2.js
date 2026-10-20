// Actualización de precios: declara cuatro precios de productos escolares, muestra el arreglo original, corrige el segundo precio 
// y presenta el arreglo actualizado.
const utilesEscolares = [3, 4, 5, 2];
//Arreglo original
console.log("Arreglo original $", utilesEscolares);
//Corrección del segundo precio
utilesEscolares[1] = 4.5;
//Arreglo actualizado
console.log("Arreglo actualizado $", utilesEscolares);
// Acceso fuera de rango: analiza const departamentos: string[] = ["San Miguel", "La Unión", "Morazán"];
//  y determina qué sucede al consultar departamentos[3]. Corrige el acceso y muestra el último elemento con length.
const departamentos = ["San Miguel", "La Unión", "Morazán"];
//Acceso fuera de rango
console.log("Acceso fuera de rango: ", departamentos[3]); //undefined
//Acceso al último elemento
console.log("Último departamento: ", departamentos[departamentos.length - 1]);
export {};
