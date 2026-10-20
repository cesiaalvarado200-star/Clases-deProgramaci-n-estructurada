// Ejercicio 2: Gestión de edades
// Se posee el siguiente array de edades: [15, 21, 17, 30, 18, 16, 25, 14, 20]
// Realice las siguientes operaciones:
// • Obtenga únicamente las edades mayores o iguales a 18.
// • Ordene las edades obtenidas de menor a mayor.
// • Busque la primera edad que sea mayor a 20.
// • Calcule la suma de todas las edades de las personas mayores de edad.

let edades:number[]=[15,21,17,30,18,16,25,14,20]

//Filtrar mayores a 18
let mayoresEdad:number[]=edades.filter((edad)=>{return edad>=18})

//Ordenarlos de menor a mayor
let mayoresEdadOrdenados:number[] = mayoresEdad.sort((a,b)=> a-b) 
console.log(mayoresEdadOrdenados)

//Buscar edad mayor a 20
console.log(mayoresEdad)
console.log("La primer edad mayor a 20 es " + mayoresEdad.find((edad)=>{return edad>20}))

let total:number=mayoresEdad.reduce((total,edad)=>{return total + edad}, 0)
console.log(total)

