/* Se posee el siguiente array de números: [12, 7, 20, 5, 18, 3, 24, 9, 10] Utilizando métodos de
arrays, realice lo siguiente:
• Obtenga únicamente los números pares.
• Multiplique cada número obtenido por 2.
• Ordene los resultados de menor a mayor. */

let numeros =[12, 7, 20, 5, 18, 3, 24, 9, 10];
let pares:number[]=numeros.filter((numero) => { return numero % 2 ===0});
 
console.log(pares);

let multiplicados:number[]=pares.map((numero)=> {return numero * 2});
console.log(multiplicados);

let ordenados:number[]=multiplicados.sort((a, b) => a - b);
console.log(ordenados);